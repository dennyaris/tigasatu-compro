/**
 * toArray(666); // -> [666]
 * toArray([666]); // -> [666]
 */
export function toArray<T> (value?: T | Array<T> | null): Array<T> {
  value = value ?? []

  if (Array.isArray(value)) { return value }

  return [value]
}
