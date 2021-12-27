import type { Patient } from 'app/model';
import type { RecursiveKeyOf } from 'app/utilities/types';

export interface ColumnDescriptor {
    field: RecursiveKeyOf<Patient>;
    label: string;
    //width: number | `${number}${'px' | 'rem' | 'em' | '%'}`;
}
