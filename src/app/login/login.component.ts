import { Component, OnInit } from '@angular/core';
import {UserLogin} from "../models/UserLogin";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import { Token } from "../models/Token";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin('', '');
  private response: any;
  private message: any;
  private token: Token = new Token('', '');
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  public logInUser(): void {
    let body = new URLSearchParams();
    body.set('username', this.userLogin.login);
    body.set('password', this.userLogin.password);

    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    }

    this.response = this.httpClient.post('http://localhost:8080/login',body.toString(), options).subscribe((data) => {
      localStorage.setItem("loginResponse", JSON.stringify(data))
    });
    console.log("loginResponse: " + localStorage.getItem("loginResponse"))

    if(this.response!=null){
      console.log("sesja: "+localStorage.getItem("loginResponse"));

      // @ts-ignore
      this.token = JSON.parse(localStorage.getItem("loginResponse")) as Token;  // if it's object

      console.log("response: "+this.token.accessToken);

      this.router.navigate([""])
    }
  }

}
