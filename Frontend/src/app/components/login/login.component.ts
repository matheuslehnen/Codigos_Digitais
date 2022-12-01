import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('emailForm') emailForm: any;
  @ViewChild('senha') senha: any;
  @ViewChild('submitButton') submitButton: any;
  hide = true;
  enabled = false;
  loginFormGroup: FormGroup;

  constructor(
      private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginFormGroup = this.authService.getForm();
  }

  loginSubmit(loginFormGroup: FormGroup) {
    this.authService.login(loginFormGroup);
  }


}