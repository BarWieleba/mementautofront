import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Token} from "../models/Token";
import {Router} from "@angular/router";
import {Car} from "../models/Car";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  private response: any;
  private vehicles : Array<Car> = Array<Car>();
  private token: Token = new Token('', '');
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("loginResponse") !=null) {
      // @ts-ignore
      this.token = JSON.parse(localStorage.getItem("loginResponse")) as Token;  // if it's object
    }

    let options = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token.accessToken})
    }

    this.response = this.httpClient.post('http://localhost:8080/api/vehicles',"", options).subscribe((data) => {
      JSON.stringify(data);
    });

    if(this.response!=null){
      console.log("sesja: "+localStorage.getItem("loginResponse"));

      // @ts-ignore
      this.token = JSON.parse(localStorage.getItem("loginResponse")) as Token;  // if it's object

      console.log("response: "+this.token.accessToken);
    }
  }

}
