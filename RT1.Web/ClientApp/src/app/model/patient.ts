import { isNil as _isNil } from 'lodash-es';

import { Gender } from './gender';

export class Patient {
    public id: number;
    public firstName: string;
    public lastName: string;
    public birthday: Date;
    public gender?: Gender;

    constructor(other: Patient) {
        this.id = other?.id ?? -1;
        this.firstName = other?.firstName;
        this.lastName = other?.lastName;
        this.birthday = new Date(other?.birthday);
        if (!_isNil(other?.gender)) {
            this.gender = new Gender(other?.gender);
        }
    }
}
