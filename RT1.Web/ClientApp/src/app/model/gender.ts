export class Gender {
    public id: number;
    public label: string;

    constructor(other: Gender) {
        this.id = other?.id;
        this.label = other?.label;
    }
}
