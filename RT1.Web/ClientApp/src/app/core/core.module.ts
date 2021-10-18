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

/*

[
  {
    "id": 0,
    "firstName": "string",
    "lastName": "string",
    "gender":
    {
        "id": 0,
        "label": "M"
    },
    "birthday": "2021-10-18T03:36:08.506Z"
  }
]

*/

// const x = [
//     {
//         "id":-1,
//         "firstName":"Clark",
//         "lastName":"Kent",
//         "birthday":"Sun Oct 17 2021 23:37:51 GMT-0400 (Eastern Daylight Time)",
//         "gender":
//         {
//             "id":2,
//             "label":"M"
//         }
//     },
//     {
//         "id":-1,
//         "firstName":"Diana",
//         "lastName":"Prince",
//         "birthday":"Sun Oct 17 2021 23:37:51 GMT-0400 (Eastern Daylight Time)",
//         "gender":
//         {
//             "id":1,
//             "label":"F"
//         }
//     },
//     {
//         "id":-1,
//         "firstName":"Tony",
//         "lastName":"Stark",
//         "birthday":"Sun Oct 17 2021 23:37:51 GMT-0400 (Eastern Daylight Time)",
//         "gender":
//         {
//             "id":2,
//             "label":"M"
//         }
//     },
//     {
//         "id":-1,
//         "firstName":"Carol",
//         "lastName":"Denvers",
//         "birthday":"Sun Oct 17 2021 23:37:51 GMT-0400 (Eastern Daylight Time)",
//         "gender":
//         {
//             "id":1,
//             "label":"F"
//         }
//     }
// ]
