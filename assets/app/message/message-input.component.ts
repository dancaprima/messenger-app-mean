import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model'
import { NgForm } from '@angular/forms';

@Component({
    selector: 'message-input',
    templateUrl: 'message-input.component.html'

})

export class MessageInput implements OnInit {

    message: Message;

    constructor(private messageService: MessageService) {

    }

    onSubmit(form: NgForm) {
        if (this.message){
            //edit
            this.message.content = form.value.content;
            this.messageService.updateMessage(this.message)
                .subscribe(
                    result => console.log(result)
                )
            this.message = null;
                }else{
            //create
        const message = new Message(form.value.content, "Danca")
        this.messageService.addMessage(message)
        .subscribe(
            data => console.log(data),
            error => console.error(error)                    
        )
        form.resetForm();
        }
        
    }

    onClear(form : NgForm){
        this.message=null;
        form.resetForm();
    }

    ngOnInit(){
        this.messageService.messageIsEdit.subscribe(
            (message: Message)=> this.message = message
        );
    }
}