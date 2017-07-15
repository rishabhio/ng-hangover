import { Component, OnInit } from '@angular/core';

export class Wine {
  id: number; 
  name: string; 
  image: string; 
  price: string; 
  description: string; 
}
const WINES: Wine[] = [
  { id: 101, name: 'brandy', image: 'assets/001.png', price:'34' , description: 'brandy is very trendy' },
  { id: 102, name: 'vodka', image: 'assets/001.png', price:'45' , description: 'drink vodka and learn nodejs' }
];


@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
  
export class PopularComponent implements OnInit {
  wines = WINES; 
  constructor() { }

  ngOnInit() {
  }

}
