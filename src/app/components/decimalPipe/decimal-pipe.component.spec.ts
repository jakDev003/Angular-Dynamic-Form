import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DecimalPipeFormComponent } from "./decimal-pipe.component";

describe("DecimalPipeFormComponent", () => {
  let component: DecimalPipeFormComponent;
  let fixture: ComponentFixture<DecimalPipeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DecimalPipeFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimalPipeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
