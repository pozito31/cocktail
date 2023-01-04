import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCocktailsComponent } from './list-cocktails.component';

describe('ListCocktailsComponent', () => {
  let component: ListCocktailsComponent;
  let fixture: ComponentFixture<ListCocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCocktailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
