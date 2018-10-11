import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLaptopComponent } from './content-laptop.component';

describe('ContentLaptopComponent', () => {
  let component: ContentLaptopComponent;
  let fixture: ComponentFixture<ContentLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
