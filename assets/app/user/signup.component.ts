import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl : './signup.Component.html'
})

export class SignupComponent implements OnInit{
    
    myForm: FormGroup; 
    
    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();
    }
  
    ngOnInit(){
       
        this.myForm = new FormGroup({
            firstname: new FormControl(null, Validators.required),
            lastname: new FormControl(null, Validators.required),
            email: new FormControl(null,
            [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });

        
    }
    
    
}