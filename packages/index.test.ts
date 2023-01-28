import { expect, it } from 'vitest'
import { resolveUtils } from '.'

it('resolveUtils', () => {
  expect(resolveUtils('util')).toMatchInlineSnapshot(`
    {
      "@vtrbo/utils/array": [
        [
          "groupBy",
          "utilGroupBy",
        ],
        [
          "toArray",
          "utilToArray",
        ],
      ],
      "@vtrbo/utils/color": [
        [
          "hexToRgba",
          "utilHexToRgba",
        ],
        [
          "randomHex",
          "utilRandomHex",
        ],
        [
          "rgbaToHex",
          "utilRgbaToHex",
        ],
      ],
      "@vtrbo/utils/date": [
        [
          "format",
          "utilFormat",
        ],
      ],
      "@vtrbo/utils/fn": [
        [
          "no",
          "utilNo",
        ],
        [
          "noop",
          "utilNoop",
        ],
        [
          "once",
          "utilOnce",
        ],
        [
          "toRawType",
          "utilToRawType",
        ],
      ],
      "@vtrbo/utils/guard": [
        [
          "notFalsy",
          "utilNotFalsy",
        ],
        [
          "notNull",
          "utilNotNull",
        ],
        [
          "notNullish",
          "utilNotNullish",
        ],
        [
          "notUndefined",
          "utilNotUndefined",
        ],
      ],
      "@vtrbo/utils/is": [
        [
          "isArray",
          "utilIsArray",
        ],
        [
          "isBoolean",
          "utilIsBoolean",
        ],
        [
          "isFunction",
          "utilIsFunction",
        ],
        [
          "isIntegerString",
          "utilIsIntegerString",
        ],
        [
          "isNull",
          "utilIsNull",
        ],
        [
          "isNumber",
          "utilIsNumber",
        ],
        [
          "isObject",
          "utilIsObject",
        ],
        [
          "isRegExp",
          "utilIsRegExp",
        ],
        [
          "isString",
          "utilIsString",
        ],
        [
          "isType",
          "utilIsType",
        ],
        [
          "isUndefined",
          "utilIsUndefined",
        ],
      ],
      "@vtrbo/utils/object": [
        [
          "clone",
          "utilClone",
        ],
        [
          "entries",
          "utilEntries",
        ],
        [
          "hasOwn",
          "utilHasOwn",
        ],
        [
          "keyIn",
          "utilKeyIn",
        ],
        [
          "keys",
          "utilKeys",
        ],
        [
          "map",
          "utilMap",
        ],
        [
          "merge",
          "utilMerge",
        ],
        [
          "omit",
          "utilOmit",
        ],
        [
          "pick",
          "utilPick",
        ],
      ],
      "@vtrbo/utils/string": [
        [
          "backslashToSlash",
          "utilBackslashToSlash",
        ],
        [
          "decrypt",
          "utilDecrypt",
        ],
        [
          "encrypt",
          "utilEncrypt",
        ],
        [
          "ensurePrefix",
          "utilEnsurePrefix",
        ],
        [
          "ensureSuffix",
          "utilEnsureSuffix",
        ],
        [
          "firstUpperCase",
          "utilFirstUpperCase",
        ],
        [
          "getCenter",
          "utilGetCenter",
        ],
        [
          "getLeft",
          "utilGetLeft",
        ],
        [
          "getRight",
          "utilGetRight",
        ],
        [
          "randomString",
          "utilRandomString",
        ],
        [
          "templateEngine",
          "utilTemplateEngine",
        ],
        [
          "toString",
          "utilToString",
        ],
      ],
      "@vtrbo/utils/tree": [
        [
          "filter",
          "utilFilter",
        ],
        [
          "findNodes",
          "utilFindNodes",
        ],
        [
          "findPaths",
          "utilFindPaths",
        ],
        [
          "toList",
          "utilToList",
        ],
      ],
    }
  `)
})