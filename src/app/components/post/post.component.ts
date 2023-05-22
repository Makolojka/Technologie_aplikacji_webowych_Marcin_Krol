import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  public credentials = {
    image: '',
    text: '',
    title: '',
  };

  constructor(private authService: AuthService,private dataService: DataService, public router: Router) {
  }

  ngOnInit() {
  }

  createPost() {
    if(this.authService.isLoggedIn()) {
      this.dataService.createPost(this.credentials).subscribe((result) => {
        return result;
      });
      this.router.navigate(['/']);
    }
  }
}
