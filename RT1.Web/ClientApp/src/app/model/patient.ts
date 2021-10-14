import { Gender } from './gender';

export class Patient {
    public id: number;
    public firstName: string;
    public lastName: string;
    public genderId: number;
    public birthday: Date;
    public gender: Gender;

    constructor(other: Patient) {
        this.id = other?.id;
        this.firstName = other?.firstName;
        this.lastName = other?.lastName;
        this.genderId = other?.genderId;
        this.birthday = other?.birthday;
        this.gender = new Gender(other?.gender);
    }
}
