import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(AppComponent);
            });
    });

    it('should create the app', () => {
        expect.hasAssertions();
        const fixture = TestBed.createComponent(AppComponent);
        const { componentInstance } = fixture;
        expect(componentInstance).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect.hasAssertions();
        expect(fixture.nativeElement).toMatchSnapshot();
    });
});
