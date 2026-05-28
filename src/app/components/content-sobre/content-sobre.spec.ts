import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSobre } from './content-sobre';

describe('ContentSobre', () => {
  let component: ContentSobre;
  let fixture: ComponentFixture<ContentSobre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentSobre],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentSobre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
