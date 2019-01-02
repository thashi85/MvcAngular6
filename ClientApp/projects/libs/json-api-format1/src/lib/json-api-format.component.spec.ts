import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonApiFormatComponent } from './json-api-format.component';

describe('JsonApiFormatComponent', () => {
  let component: JsonApiFormatComponent;
  let fixture: ComponentFixture<JsonApiFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonApiFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonApiFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
