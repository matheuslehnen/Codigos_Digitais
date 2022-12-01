import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
  email: string;
  loginForm: FormGroup;

  constructor(
      private authService: AuthService,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.maxLength(6)]],
    });
  }
  loginSubmit(loginForm: FormGroup) {
    this.authService.login(loginForm.value);
  }

  focusOnPass() {
    this.senha.nativeElement.focus();
  }

  focusOnButton() {
    let pass = this.senha.nativeElement.value;
    if (pass.length == 6) {
      this.submitButton.focus();
    }
  }

}