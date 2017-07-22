import { Component, OnInit } from '@angular/core';
import { WineService } from '../wine.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'] ,
  providers: [ WineService ]
})
export class CategoriesComponent implements OnInit {
  categories:String[]; 
  constructor( private wineService:WineService ) {
      this.categories = this.wineService.getWineCategories(); 
   }


  ngOnInit() {
  }

}
