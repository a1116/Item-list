import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  itemList = ["Pen", "milk", "sugar", "rice"];
  newItemInput = "";

  closeBtnHandler(index) {
    this.itemList.splice(index, 1);
  }

  onEnter(value) {
    this.itemList.unshift(this.newItemInput);
    this.newItemInput = "";
  }
}
