import type { Patient } from 'model';
import type { RecursiveKeyOf } from 'utilities/types';

export interface ColumnDescriptor {
    field: RecursiveKeyOf<Patient>;
    label: string;

    // width: number | `${number}${'px' | 'rem' | 'em' | '%'}`;
}
