import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCardsComponent } from './film-cards.component';

describe('FilmCardsComponent', () => {
  let component: FilmCardsComponent;
  let fixture: ComponentFixture<FilmCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
