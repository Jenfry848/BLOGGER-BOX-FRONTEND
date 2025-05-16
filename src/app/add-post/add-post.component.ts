import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../data/category';
import { CategoryService } from '../services/CategoryService';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-add-post',
  standalone: false,
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;
  categories: Category[] = [];
 
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private postService: PostService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      category: ['', Validators.required],
      content: ['', [Validators.required, Validators.maxLength(2500)]]
    });
 
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }
 
  submit(): void {
    if (this.postForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Please review your post',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      return;
    }
 
    this.postService.create(this.postForm.value).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Post Submitted Successfully',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
 
      this.router.navigate(['/']);
    });
  }
}


