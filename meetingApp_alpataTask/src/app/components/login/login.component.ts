import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
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

  submit(){
    this.api.getUser().subscribe((res: any) => {
      const user = res.find((data: any) => {
        return data.email === this.loginForm.value.email && data.password === this.loginForm.value.password
        });
        if(user) {
          this.toast.success("Succesfully login")
          this.router.navigate(['meeting']);
        } else {
          this.toast.error("failed login")
        }
      })

    }

}
