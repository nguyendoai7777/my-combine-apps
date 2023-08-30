import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSplitterComponent } from './image-splitter.component';

describe('ImageSplitterComponent', () => {
  let component: ImageSplitterComponent;
  let fixture: ComponentFixture<ImageSplitterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageSplitterComponent],
    });
    fixture = TestBed.createComponent(ImageSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
