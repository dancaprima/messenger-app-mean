import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector : 'app-signin',
    templateUrl: './signin.component.html'
})

export class SigninComponent implements OnInit {
     myForm: FormGroup; 
    
    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();
    }
  
    ngOnInit(){
       
        this.myForm = new FormGroup({
            
            email: new FormControl(null,
            [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });

        
    }
}