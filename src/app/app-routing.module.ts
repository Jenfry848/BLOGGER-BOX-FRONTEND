import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import {AddPostComponent } from './add-post/add-post.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';

 const routes: Routes =[
  {path: '', component: PostListComponent},
  {path: 'add-post', component: AddPostComponent},
  //{path:'home', component: AppComponent},
  //{path:'users', component: UsersListComponent},
  //{path:'users/:id', component: UsersDetailsComponent},
  {path: 'posts/:id', component: PostDetailsComponent},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'search', component: SearchResultsComponent }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
