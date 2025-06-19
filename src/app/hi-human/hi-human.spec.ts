import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiHuman } from './hi-human';

describe('HiHuman', () => {
  let component: HiHuman;
  let fixture: ComponentFixture<HiHuman>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiHuman]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiHuman);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
