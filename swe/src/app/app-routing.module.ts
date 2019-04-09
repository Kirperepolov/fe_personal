import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharactersComponent} from "./characters/characters.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CategoriesComponent} from "./categories/categories.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: ':name', component: CategoriesComponent},
  {path: 'people/:id', component: CharactersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
