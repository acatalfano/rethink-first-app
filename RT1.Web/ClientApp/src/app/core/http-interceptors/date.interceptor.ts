import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
    cloneDeep as _cloneDeep,
    isArray as _isArray,
    isDate as _isDate,
    isObject as _isObject,
    isString as _isString
} from 'lodash-es';
import { Observable } from 'rxjs';

@Injectable()
export class DateInterceptor implements HttpInterceptor {
    public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const mimeType = req.detectContentTypeHeader();

        if (mimeType?.toLowerCase() === 'application/json') {
            const copy = _cloneDeep(req.body);
            const nextRequest = req.clone({
                body: this.walkBody(copy)
            });
            return next.handle(nextRequest);
        } else {
            return next.handle(req);
        }
    }

    private walkBody(body: unknown): unknown {
        if (_isDate(body)) {
            return body.toJSON();
        } else if (_isArray(body)) {
            return body.map(el => this.walkBody(el));
        } else if (_isObject(body)) {
            return Object.entries(body).reduce(
                (accum, [key, value]) => ({ ...accum, [key]: this.walkBody(value) }),
                {}
            );
        } else {
            return this.tryTransformDateString(body);
        }
    }

    private tryTransformDateString(body: unknown): unknown {
        if (_isString(body)) {
            const candiDate = new Date(body);
            if (candiDate.toString() === body) {
                return candiDate.toJSON();
            } else {
                return body;
            }
        } else {
            return body;
        }
    }
}
