import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPhoneComponent } from './content-phone.component';

describe('ContentPhoneComponent', () => {
  let component: ContentPhoneComponent;
  let fixture: ComponentFixture<ContentPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
