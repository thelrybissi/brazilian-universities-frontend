import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityDetailclsComponent } from './university-detailcls.component';

describe('UniversityDetailclsComponent', () => {
  let component: UniversityDetailclsComponent;
  let fixture: ComponentFixture<UniversityDetailclsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversityDetailclsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityDetailclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
