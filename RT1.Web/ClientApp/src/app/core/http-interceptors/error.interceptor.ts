import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private readonly router: Router) {}

    public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            tap(
                () => {},
                err => {
                    if (err instanceof HttpErrorResponse) {
                        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
                        if (err.status === 401) {
                            this.router.navigateByUrl('/');
                        }
                    }
                }
            )
        );
    }
}
