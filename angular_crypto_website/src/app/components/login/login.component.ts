import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  token: any;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    // console.log(this.loginForm)
  }

  createForm() {
    this.loginForm = this.fb.group({
      identifier: ['test@test.com', [Validators.required]],
      password: ['123abc', [Validators.required]],
    });
  }

  get formValue() {
    return this.loginForm.value;
  }

  onSubmit() {
    const { identifier, password } = this.formValue;
    this.auth.loginUser(identifier, password).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['profil'])
        console.log(res.token);
        this.token = localStorage.getItem('token');
      },
      (err) => console.log(err)
    );
  }

}
