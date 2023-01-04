import { Icocktail } from "../interfaces/icocktail";
import * as _ from 'lodash';

export class Cocktail implements Icocktail {
  constructor(data) {
    _.set(this, 'data', data)
  }

  get id(): string{
    return _.get(this, 'data.idDrink');
  }

  get name(): string{
    return _.get(this, 'data.strDrink');
  }

  get img(): string{
    return _.get(this, 'data.strDrinkThumb');
  }

  get glass(): string{
    return _.get(this, 'data.strGlass');
  }

  get ingredients(): string[]{
    return this.getList('data.strIngredient');
  }

  get numIngredients(): number{
    return this.ingredients.length;
  }

  get instructions(): string{
    return _.get(this, 'data.strInstructionsES') ? _.get(this, 'data.strInstructionsES') : _.get(this, 'data.strInstructions') ;
  }

  get measures(): string[]{
    return this.getList('data.strMeasure');
  }

  get numMeasures(): number{
    return this.measures.length;
  }

  private getList(path: string): string[] {
    let index = 1;
    let element = _.get(this, path + index);
    let list = [];

    while (element) {
      list.push(element);
      index++;
      element = _.get(this, path + index);
    }

    return list;
  }
}
