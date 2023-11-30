export function toRawType(data: unknown): string {
  return Object.prototype.toString.call(data).slice(8, -1)
}

export function notNullish<T>(v: T | null | undefined): v is NonNullable<T> {
  return v != null
}

export function noop() {}
