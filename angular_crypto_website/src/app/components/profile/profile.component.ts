import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profil } from 'src/app/models/profile.model';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profil: any;

  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onCreatePost() {
    const postData: Profil = {
      title: '',
      content: '',
    };
    this.api.createPost(postData).subscribe((response) => {
      this.profil = response.me;

      console.log(this.profil);
    });
  }


}
