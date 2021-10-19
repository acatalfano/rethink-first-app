import { isNil as _isNil } from 'lodash-es';

export const isDefined = <T>(maybeDefined: T | null | undefined): maybeDefined is T => !_isNil(maybeDefined);
