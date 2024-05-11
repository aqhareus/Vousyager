import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageItineraryComponent } from './page-itinerary.component';

describe('PageItineraryComponent', () => {
  let component: PageItineraryComponent;
  let fixture: ComponentFixture<PageItineraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageItineraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
