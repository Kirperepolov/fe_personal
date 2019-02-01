import {Component, OnInit} from '@angular/core';
import {HttpLoaderService} from "./http-loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Star Wars Encyclopedia';
  private data: any;
  categories = [];

  constructor(private dataService: HttpLoaderService) {
  }

  ngOnInit() {
    this.retrieveCategories('');
  }

  private retrieveCategories(url: string) {
    this.dataService.getData(url).subscribe(res => {
      this.data = res;
      for (let name in res) {
        this.categories.push({name: name, link: res[name]});
      }
      console.log(this.categories);
      if (this.data.next) {
        this.retrieveCategories(this.data.next);
      }
    })
  }
}
