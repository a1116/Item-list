import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SigninComponent } from "./signin/signin.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { ItemContainerComponent } from "./todo-list/itemContainer.component";
import { ItemComponent } from "./todo-list/item.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ItemContainerComponent,
    ItemComponent,
    SigninComponent,
    TodoListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
