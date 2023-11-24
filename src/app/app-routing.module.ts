import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableDataComponent } from './table-data/table-data.component';
import { TypesOfPipesComponent } from './types-of-pipes/types-of-pipes.component';

const routes: Routes = [
  {path:"table",component:TableDataComponent},
  {path:'pipe',component:TypesOfPipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
