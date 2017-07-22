import { Injectable } from '@angular/core';

export class Wine {
  id: number; 
  name: string; 
  image: string; 
  price: string; 
  description: string; 
}
const WINES: Wine[] = [
  { id: 101, name: 'brandy', image: 'assets/001.png', price:'34' , description: 'brandy is very trendy' },
  { id: 102, name: 'vodka', image: 'assets/001.png', price:'45' , description: 'drink vodka and learn nodejs' },
   { id: 103, name: 'scotch', image: 'assets/001.png', price:'55' , description: 'drink scotch and learn nodejs' },
    { id: 104, name: 'rum', image: 'assets/001.png', price:'123' , description: 'drink rum and learn nodejs' }
];

const CATEGORIES:string[] = [ 'brandy' , 'cachaca' , 'gin' , 'rum' , 'schnapps' , 'tequila' , 'vodka' , 'whisky'  ]
@Injectable()
export class WineService {
  wines = WINES; 
  categories = CATEGORIES; 
  constructor() { }
  
  getPopularWines() {
    return this.wines; 
  }
  
  getWineCategories() {
    return this.categories; 
  }



}
