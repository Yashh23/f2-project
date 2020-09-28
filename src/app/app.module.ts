import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoInputComponent } from './todo/todo-input/todo-input.component';
import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoFooterComponent,
    TodoInputComponent,
    TodoHeaderComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
