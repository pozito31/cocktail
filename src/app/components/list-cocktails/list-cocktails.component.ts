import { Component } from '@angular/core';
import { IFilter } from 'src/app/interfaces/ifilter';
import { Cocktail } from 'src/app/models/cocktail';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-list-cocktails',
  templateUrl: './list-cocktails.component.html',
  styleUrls: ['./list-cocktails.component.css']
})
export class ListCocktailsComponent {

  public showFilter: boolean;
  public listCocktails: Cocktail[];
  public loadCocktails: boolean;
  public filter: IFilter;
  public items: number;
  public page: number;

  constructor(private cocktail: CocktailService) {
    this.showFilter = false;
    this.listCocktails = [];
    this.filter = {
      searchBy: 'name',
      value: ''
    }
    this.loadCocktails = true;
    this.items = 12;
    this.page = 1;
  }

  hideShowFilter() {
    this.showFilter = !this.showFilter;
  }

  filterData() {
    this.loadCocktails = false;

    this.cocktail.getCocktailsFilter(this.filter).subscribe(cocktails => {
      console.log(cocktails);
      this.listCocktails = cocktails;
      this.loadCocktails = true;
    })
  }
}
