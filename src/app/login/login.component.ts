import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_service/auth.service';
import { Login } from '../_models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;
  // tslint:disable-next-line:no-inferrable-types
  private submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    private route: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formulario() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) { return; }

    // tslint:disable-next-line:prefer-const
    let loginModel = new Login();
    loginModel.Password = this.formulario.password.value;
    loginModel.Login = this.formulario.login.value;

    this.authService.login(loginModel)
      .subscribe(data => {
        console.log('usuário logado.');
        this.route.navigateByUrl('/');
      });

  }

}
