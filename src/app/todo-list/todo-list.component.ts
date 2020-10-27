import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  name = "Angular";
  itemList = ["Pen", "milk", "sugar", "rice"];
  newItemInput = "";

  static observable_variable = new Subject();

  ngOnInit() {
    TodoListComponent.observable_variable.subscribe(v => {
      console.log(v);
      this.onCloseBtn(v);
    });
  }

  onCloseBtn(index) {
    this.itemList.splice(index, 1);
  }

  onEnter() {
    console.log(this.newItemInput);
    if (this.newItemInput == "") {
      return;
    }
    this.itemList.unshift(this.newItemInput);
    this.newItemInput = "";
  }
}
