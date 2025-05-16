import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../data/post';
 
@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  standalone: false,
})
export class SearchResultsComponent implements OnInit {
  posts: Post[] = [];
 
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}
 
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const keyword = params.get('keyword');
      if (keyword) {
        this.postService.search(keyword).subscribe((posts) => {
          this.posts = posts;
        });
      }
    });
  }


}
