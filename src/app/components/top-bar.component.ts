import { Component } from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    standalone: false,
    styleUrl: './top-bar.component.css',
})
export class TopBarComponent { 
    keyword: string ='';

    constructor (private router: Router){}

    goToAddPost(): void {
        this.router.navigate(['/add-post']);
    }

    search(): void {
        if(this.keyword.trim()) {
            this.router.navigate(['/search'], {queryParams: {keyword: this.keyword}});
        }
    }
    
}