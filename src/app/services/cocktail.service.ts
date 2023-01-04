import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFilter } from '../interfaces/ifilter';
import * as _ from 'lodash';
import { Cocktail } from '../models/cocktail';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  getCocktailsFilter(filter: IFilter) {

    const urlBase = "https://www.thecocktaildb.com/api/json/v1/1/";
    let additionalUrl = '';

    // Si el filtro de busqueda es por nombre, llamamos a su fichero correctamente
    if (filter.searchBy === 'name') {
      additionalUrl = 'search.php?s=' + filter.value;
    } else {

      // Si el filtro de busqueda es otro, ya le añado el nombre del fichero y despues lo completo
      additionalUrl = 'filter.php?';
      if (filter.searchBy === 'glass') {
        additionalUrl += 'g=';
      } else if (filter.searchBy === 'category') {
        additionalUrl += 'c=';
      } else {
        additionalUrl += 'i=';
      }

      additionalUrl += filter.value;
    }

    // Completo la URL
    const finalURL = urlBase + additionalUrl;

    // Llamo al fichero php de cocktailDB
    return this.http.get(finalURL).pipe(
      map(data => this.parseData(_.get(data, 'drinks')))
    );

  }

  getCocktailById(id: string) {
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id).pipe(
      map(data => {
        const list = this.parseData(_.get(data, 'drinks'));
        return list[0];
      })
    )
  }

 private parseData(listCocktails) {

    let newListCocktails = [];

    // Recorro la lista
    _.forEach(listCocktails, c => {

      // Creo el cocktail
      let cocktail = new Cocktail(c);

      // Lo añado en nuestra nueva lista
      newListCocktails.push(cocktail);

    });

    return newListCocktails;
  }
}
