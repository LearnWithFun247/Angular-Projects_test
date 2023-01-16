import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockLocatorComponent } from './stock-locator.component';

describe('StockLocatorComponent', () => {
  let component: StockLocatorComponent;
  let fixture: ComponentFixture<StockLocatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockLocatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
