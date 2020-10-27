import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  static signinObs = new Subject<boolean>();
  static onLogout = new Subject<boolean>();
  isSignedIn = false;
  showTodo = false;

  ngOnInit() {
    AppComponent.signinObs.subscribe(v => {
      console.log(v);
      this.isSignedIn = v;
      this.showTodo = v;
    });

    AppComponent.onLogout.subscribe(v => {
      this.isSignedIn = !confirm("Log out?");
    });
  }
}
