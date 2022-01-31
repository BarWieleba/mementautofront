import { Component } from '@angular/core';
import {Token} from "./models/Token";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mementautofront';
  // @ts-ignore
  token: Token = JSON.parse(localStorage.getItem("loginResponse")) as Token;

}
