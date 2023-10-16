export function toRawType(data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1)
}

export function notNullish<T>(v: T | null | undefined): v is NonNullable<T> {
  return v != null
}
