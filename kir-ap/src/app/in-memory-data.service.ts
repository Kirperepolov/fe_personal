import {InMemoryDbService} from "angular-in-memory-web-api";
import {Hero} from "./hero";
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 32, name: 'Kir'},
      {id: 33, name: 'Sasha'},
      {id: 34, name: 'Dasha'},
      {id: 35, name: 'Tolik'},
      {id: 36, name: 'Rick'},
      {id: 39, name: 'Morty'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
