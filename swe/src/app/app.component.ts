import { Component } from '@angular/core';
import {HttpLoaderService} from "./http-loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Star Wars Encyclopedia';
  private data: any;
  private peopleList = [];

  constructor(private dataService: HttpLoaderService) {
  }

  ngOnInit() {
    this.retrieveHeroes('people/');
  }

  private retrieveHeroes(url: string) {
    this.dataService.getData(url).subscribe(res => {
      this.data = res;
      this.peopleList.push(...this.data.results);
      console.log(this.peopleList);
      if (this.data.next) {
        this.retrieveHeroes(this.data.next);
      }
    })
  }
}
