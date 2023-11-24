import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalutaionPipePipe } from './salutaion-pipe.pipe';
import { TableDataComponent } from './table-data/table-data.component';
import { TypesOfPipesComponent } from './types-of-pipes/types-of-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    SalutaionPipePipe,
    TableDataComponent,
    TypesOfPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
