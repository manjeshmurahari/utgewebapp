import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
export interface Tile {
  cols: number;
  rows: number;
  text: string;
  border: string;
 }
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // tiles: Tile[] = [
  //   {text: 'Address', cols: 1, rows: 1 ,border: '3px double yellow'},
  //   {text: 'Location', cols: 1, rows: 1 ,border: '3px double yellow'},
  //   {text: 'Tile 3', cols: 1, rows: 1 ,border: '3px double yellow'},
  //   //  {text: 'Tile 4', cols: 1, rows: 1 ,border: '3px double yellow'},
  //   ];

  constructor(private router:Router){}
  aboutus(){
    this.router.navigate(['/aboutus'])
  }
  homepage(){
    this.router.navigate(['/homepage'])
  }
  gallery(){
    this.router.navigate(['/gallery'])
  }
  boteng(){
    this.router.navigate(['/boteng'])
  }
  contactus(){
    this.router.navigate(['/contactus'])
  }
}
