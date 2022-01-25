import _ from 'lodash';

declare global {
  interface String {
    equalsIgnoreCase(other: string): boolean;
  }

  interface Array<T> {
    includesIgnoreCase(value: T): boolean;
  }
}

String.prototype.equalsIgnoreCase = function (other: string): boolean {
  return this.toUpperCase() === other.toUpperCase();
};

Array.prototype.includesIgnoreCase = function <T>(value: T): boolean {
  const valueStr = String(value);
  return this.some((item) => String(item).equalsIgnoreCase(valueStr));
};

type ObjectKey = string | number | symbol;
export function findIgnoreCase<T>(obj: Record<ObjectKey, T>, key: ObjectKey): T | undefined {
  const keyStr = String(key);
  return _.find(obj, (value: T, objKey: ObjectKey) => keyStr.equalsIgnoreCase(String(objKey)));
}
