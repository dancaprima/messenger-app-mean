import { Component } from '@angular/core';

@Component({
    selector : 'app-messages',
    template : `
    <div class="row">
        <message-input></message-input>
    </div>
    <hr>
	<div class="row">
		<message-list></message-list>
	</div>`
})

export class MessagesComponent {

}