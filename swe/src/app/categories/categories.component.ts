import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {HttpLoaderService} from "../http-loader.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  private list = [];
  private name: string;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private dataService: HttpLoaderService
  ) {
  }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.getCategory(this.name);
  }

  getCategory(url: string = ''): void {
    this.dataService.getData(url).subscribe(res => {
      let output: any = res;
      // this.list = output.results;
      for (let i in output.results) {
        let ent = output.results[i];
        if (this.list.some(e => e.name === ent.name)) {
          continue;
        }
        ent.id = ent.url.replace(/^.*\/([a-z]*\/\d+)\/$/gi, '$1');
        ent.img = `assets/img/${this.name}/${ent.name}.jpg`;
        this.list.push(ent);
      }
      console.log(this.list);
      if (output.next) {
        this.getCategory(output.next);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
