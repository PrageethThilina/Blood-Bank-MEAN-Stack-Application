import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ChatBotComponent } from '../chat-bot/chat-bot.component';
import { ChatService } from '../chat.service';

const routes: Routes = [
  { path: 'chat-bot', component: ChatBotComponent}
];

@NgModule({
  declarations: [
    ChatBotComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ ChatBotComponent ],
  providers: [ChatService]
})
export class ChatModule { }
