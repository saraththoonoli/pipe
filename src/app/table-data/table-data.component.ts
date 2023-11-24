import { Component } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent {

  students =
    [
      { id: 1, name: 'Jinas', gender: 'Male', course: 'Computer Science' },
      { id: 2, name: 'Seetha', gender: 'Female', course: 'Mathematics' },
      { id: 3, name: 'Sarath', gender: 'Male', course: 'Physics' },
      { id: 4, name: 'Mili', gender: 'Female', course: 'Chemistry' },
      { id: 5, name: 'Sruthi', gender: 'Female', course: 'Biology' },
      { id: 6, name: 'Akash', gender: 'Male', course: 'Electrical Engineering' },
      { id: 7, name: 'Goutham', gender: 'Male', course: 'Mechanical Engineering' },
      { id: 8, name: 'Harsha', gender: 'Female', course: 'Computer Science' },
    ];

}
