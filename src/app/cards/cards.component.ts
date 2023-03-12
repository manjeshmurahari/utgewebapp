import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  constructor(private router:Router){}
  aboutus(){
    this.router.navigate(['/aboutus'])
    // window.scrollTo(0,0);
  }
}
