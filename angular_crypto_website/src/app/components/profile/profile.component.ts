
import { Component, OnInit } from '@angular/core';
import { Profil } from 'src/app/models/profile.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profil: any ;

  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  onCreatePost() {
    const postData: Profil = {
      title: '',
      content: '',
    };
    this.api.createPost(postData).subscribe(
      (response) => {
        this.profil = response.me;

        console.log(this.profil);
      }
    );
  }
}
