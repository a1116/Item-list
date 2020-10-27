import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";
  itemList = ["Pen", "milk", "sugar", "rice"];
  newItemInput = "";

  static observable_variable = new Subject();

  ngOnInit() {
    AppComponent.observable_variable.subscribe(v => {
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
