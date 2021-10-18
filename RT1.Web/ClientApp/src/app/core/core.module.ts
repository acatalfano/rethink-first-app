import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DateInterceptor } from './http-interceptors/date.interceptor';
import { ErrorInterceptor } from './http-interceptors/error.interceptor';

@NgModule({
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: DateInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ]
})
export class CoreModule {}
