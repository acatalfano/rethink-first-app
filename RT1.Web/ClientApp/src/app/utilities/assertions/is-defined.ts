import { isNil as _isNil } from 'lodash-es';

export const isDefined = <T>(maybeDefined: T | undefined): maybeDefined is T => !_isNil(maybeDefined);
