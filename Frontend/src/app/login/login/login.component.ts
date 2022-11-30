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
  @ViewChild('password') password: any;
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
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    });
  }
  loginSubmit(loginForm: FormGroup) {
    this.authService.login(loginForm.value);
  }

  getNewPassword(): void {
    this.authService.getAllUsers();
   //implementar recuperação senha
  }

  focusOnPass() {
    this.password.nativeElement.focus();
  }

  focusOnButton() {
    let pass = this.password.nativeElement.value;
    if (pass.length == 6) {
      this.submitButton.focus();
    }
  }

}
