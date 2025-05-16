import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../data/post';
 
@Component({
  selector: 'app-post-details',
  standalone: false,
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})

export class PostDetailsComponent implements OnInit {
  post!: Post;
 
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}
 
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.postService.getById(id).subscribe((post) => {
        this.post = post;
      });
    }
  }
}
