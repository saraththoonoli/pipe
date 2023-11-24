import { Component } from '@angular/core';

@Component({
  selector: 'app-types-of-pipes',
  templateUrl: './types-of-pipes.component.html',
  styleUrls: ['./types-of-pipes.component.scss']
})
export class TypesOfPipesComponent {

  title = 'pipes';
  public head: string = 'welcome to angular'
  public heading: string = 'WELCOME TO ANGULAR'
  birthday = Date();
  public decimalNumber: number = 145862.55

  contact = {
    "image": "https://example.com/spanish_film8.jpg",
    "title": "El secreto de sus ojos (The Secret in Their Eyes)",
    "review": "Juan José Campanella's intense crime thriller with a powerful narrative and stellar performances.",
    "rating": 4.7,
    "year": 2009
  }

}
