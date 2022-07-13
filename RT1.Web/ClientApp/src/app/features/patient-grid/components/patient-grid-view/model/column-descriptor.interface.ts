import type { Patient } from 'src/app/model';
import type { RecursiveKeyOf } from 'src/app/utilities/types';

export interface ColumnDescriptor {
    field: RecursiveKeyOf<Patient>;
    label: string;

    // width: number | `${number}${'px' | 'rem' | 'em' | '%'}`;
}
