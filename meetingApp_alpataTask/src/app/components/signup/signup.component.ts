import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: ApiService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    //create sigup form with form builder
    // this.signupForm = this.fb.group({
    //   name:['',Validators.required],
    //   email:['',Validators.required],
    //   password:['',[Validators.required, Validators.minLength(6)]],
    // })

    this.signupForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      mobile: [''],
      email: [''],
      password: [''],
    });
  }

  signup(): void {
    this.api.postUser(this.signupForm.value).subscribe({
      next: (res) => {
        this.toast.success('User registration successfully');
        this.signupForm.reset();
      },
      error: () => {
        this.toast.error('User registration has error');
      },
    });
    console.log(this.signupForm.value);
  }
}
