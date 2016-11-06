import { Component } from '@angular/core';
import { MessageService } from './message/message.service';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [`
        .author{
            display : inline-block;
            font-style : italic;
            font-size : 12px;
            width : 80%;
        }
        .config{
            display: inline-block;
            text-align : right;
            font-size : 12px;
            width : 19%; 
            
        }   
    `],
    providers: [MessageService]
})
export class AppComponent {
    
}