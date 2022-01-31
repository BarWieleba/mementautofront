import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {UserRegistration} from "../models/UserRegistration";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: UserRegistration = new UserRegistration('', '', '', '', '');
  message: any;
  httpData: any;
  response: any
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
  }

  public registerUser(): void{
    this.response=this.httpClient.post('http://localhost:8080/api/user/register', this.user).subscribe((data) => this.message = data);
    this.router.navigate(["login"])
  }

}
