import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteReveiwComponent } from './write-reveiw.component';

describe('WriteReveiwComponent', () => {
  let component: WriteReveiwComponent;
  let fixture: ComponentFixture<WriteReveiwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteReveiwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteReveiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
