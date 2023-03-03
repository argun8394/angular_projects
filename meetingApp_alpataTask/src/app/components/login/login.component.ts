import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: ApiService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submit() {
    this.api.getUser().subscribe((res) => {
      //     const user = res.find((a:any) => {
      //       return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      //     });
      //     if(user) {
      //       alert("Login success");
      //       this.loginForm.reset();
      //       this.router.navigate(['meetings'])
      //     } else {
      //       alert("user not found");
      //     }
    });
  }
}
