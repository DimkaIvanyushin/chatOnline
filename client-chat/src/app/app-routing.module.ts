import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizationComponent } from './components/authorization/authorization.component';
import { ChatComponent } from './components/chat/chat.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component:  AuthorizationComponent },
  { path: 'authorization', component:  AuthorizationComponent },
  { path: 'chat', component:  ChatComponent },
  { path: '**', component:  NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
