export type RecursiveKeyOf<TObj extends object> = {
    [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`>;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
    [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<TObj[TKey], RecursiveKeyOfAccess<TKey>>;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<TValue, TText extends string> = TValue extends object
    ? TText | `${TText}${RecursiveKeyOfInner<TValue>}`
    : TText;

type RecursiveKeyOfAccess<TKey extends string | number> = `['${TKey}']` | `.${TKey}`;
