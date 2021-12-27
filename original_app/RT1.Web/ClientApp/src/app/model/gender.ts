export class Gender {
    public static get nullObject(): Gender {
        return new Gender({ id: -1, label: '' });
    }

    public id: number;
    public label: string;

    constructor(other: Gender) {
        this.id = other?.id;
        this.label = other?.label;
    }
}
