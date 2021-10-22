import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseTopicsComponent } from './browse-topics.component';

describe('BrowseTopicsComponent', () => {
  let component: BrowseTopicsComponent;
  let fixture: ComponentFixture<BrowseTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
