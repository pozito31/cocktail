import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCocktailComponent } from './detail-cocktail.component';

describe('DetailCocktailComponent', () => {
  let component: DetailCocktailComponent;
  let fixture: ComponentFixture<DetailCocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCocktailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
