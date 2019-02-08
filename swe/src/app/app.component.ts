import {Component, OnInit} from '@angular/core';
import {HttpLoaderService} from "./http-loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Star Wars Encyclopedia';
}
