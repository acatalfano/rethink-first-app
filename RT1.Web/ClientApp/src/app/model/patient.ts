import { NoIdPatient } from './no-id-patient';

export class Patient extends NoIdPatient {
    public id: number;

    constructor(other: Patient) {
        super(other);
        this.id = other?.id ?? -1;
    }
}
