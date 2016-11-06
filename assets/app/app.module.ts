import { SignupComponent } from './user/signup.component';
import { SigninComponent } from './user/signin.component';
import { LogoutComponent } from './user/logout.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header.component';
import { AuthenticationComponent } from './user/authentication.component';
import { MessagesComponent } from './message/messages.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MessageList } from './message/message-list.component';
import { MessageInput } from './message/message-input.component';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageList,
        MessageInput,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [BrowserModule,FormsModule,routing,ReactiveFormsModule,HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}