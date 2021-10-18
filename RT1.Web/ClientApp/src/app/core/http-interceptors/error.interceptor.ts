import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private readonly router: Router) {}

    public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            tap(
                () => {},
                err => {
                    if (err instanceof HttpErrorResponse) {
                        this.router.navigateByUrl('/error');
                    }
                }
            )
        );
    }
}
