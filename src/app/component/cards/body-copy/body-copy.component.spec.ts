import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCopyComponent } from './body-copy.component';

describe('BodyCopyComponent', () => {
  let component: BodyCopyComponent;
  let fixture: ComponentFixture<BodyCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCopyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
