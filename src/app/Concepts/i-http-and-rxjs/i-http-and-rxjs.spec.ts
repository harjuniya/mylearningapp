import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IHttpAndRxjs } from './i-http-and-rxjs';

describe('IHttpAndRxjs', () => {
  let component: IHttpAndRxjs;
  let fixture: ComponentFixture<IHttpAndRxjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IHttpAndRxjs]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IHttpAndRxjs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
