import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesOfPipesComponent } from './types-of-pipes.component';

describe('TypesOfPipesComponent', () => {
  let component: TypesOfPipesComponent;
  let fixture: ComponentFixture<TypesOfPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesOfPipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesOfPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
