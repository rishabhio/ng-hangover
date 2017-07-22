import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { WineService } from '../wine.service'; 
import { Wine } from '../wine.service'; 


@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'] ,
  providers: [ WineService ]
})
  
export class PopularComponent implements OnInit {
  wines : Wine[];
  constructor(private wineService: WineService) {
    this.wines = this.wineService.getPopularWines(); 
   }

  ngOnInit() {
  }

}
