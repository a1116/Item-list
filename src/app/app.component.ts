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
