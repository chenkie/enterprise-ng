import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceService } from './data-service.service';
import { Post } from '@prisma/client';

@Component({
  selector: 'ng-conf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public posts: Observable<Post[]>;
  constructor(private dataService: DataServiceService) {}

  getData() {
    this.posts = this.dataService.getPosts();
  }
}
