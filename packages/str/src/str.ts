export function toSlash(str: string): string {
  return str.replace(/\\/g, '/')
}

export function toLinesCase(str: string, isUnder: boolean = false): string {
  return str
    .replace(/^[-|_]+|[-|_]+$/g, '')
    .replace(/^[A-Z]/g, key => key.toLowerCase())
    .replace(/[A-Z]/g, key => `${isUnder ? '_' : '-'}${key.toLowerCase()}`)
}

export function toEscape(str: string): string {
  const escapeMap: {
    [key: string]: string
  } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#x27;',
  }
  const regex = /(&|<|>|"|')/g
  return str.replace(regex, match => escapeMap[match])
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function toCamelCase(str: string, isUpper: boolean = false): string {
  const camelCase = str
    .replace(/^[-|_]+|[-|_]+$/g, '')
    .replace(/[-|_]+([a-z])/g, (_, key) => key.toUpperCase())
    .replace(/[-|_]+/g, '')
  return isUpper ? capitalize(camelCase) : camelCase
}

export function template(str: string, ...args: any[]): string {
  return str.replace(/{(\d+)}/g, (match, key) => {
    const index = Number(key)
    if (Number.isNaN(index))
      return match
    return args[index]
  })
}

export function ensureSuffix(str: string, suffix: string): string {
  if (!str.endsWith(suffix))
    return str + suffix
  return str
}

export function ensurePrefix(str: string, prefix: string): string {
  if (!str.startsWith(prefix))
    return prefix + str
  return str
}
