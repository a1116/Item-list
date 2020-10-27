import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent {
  onSignin() {
    AppComponent.signinObs.next(true);
  }
}
