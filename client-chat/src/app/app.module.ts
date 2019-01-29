import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { ChatComponent } from './components/chat/chat.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InputMessageComponent } from './components/chat/input-message/input-message.component';
import { ListMessagesComponent } from './components/chat/list-messages/list-messages.component';
import { ListUsersComponent } from './components/chat/list-users/list-users.component';
import { TopBarComponent } from './components/chat/top-bar/top-bar.component';
import { SearchUserComponent } from './components/chat/search-user/search-user.component';
import { SmilePipe } from './pipes/smile.pipe';
import { SmileBarComponent } from './components/chat/smile-bar/smile-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    ChatComponent,
    NotFoundComponent,
    InputMessageComponent,
    ListMessagesComponent,
    ListUsersComponent,
    TopBarComponent,
    SearchUserComponent,
    SmilePipe,
    SmileBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextareaAutosizeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
