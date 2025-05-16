import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import {POSTS, Post} from '../data/post';
import { Category } from '../data/category';

@Injectable()
export class CategoryService {
    private categoriesUrl = http://localhost:8080/v1/categories;

    constructor(private http: HttpClient) { }

    getAll(): Observable<Category[]> {
        return this.http.get<Category[]}>(this.categoriesUrl);
            
        ]
    }

    create(category: CategoryCreateInput): Observable<Category>{
        return this.http.post<Category>(this.categoriesYrl, category);
    }
}