export function toRawType(data: any): string {
  return Object.prototype.toString.call(data).slice(8, -1)
}
