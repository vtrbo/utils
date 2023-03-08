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
          "darken",
          "utilDarken",
        ],
        [
          "hexToRgba",
          "utilHexToRgba",
        ],
        [
          "lighten",
          "utilLighten",
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
        [
          "no",
          "utilNo",
        ],
        [
          "noop",
          "utilNoop",
        ],
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
        [
          "once",
          "utilOnce",
        ],
        [
          "toRawType",
          "utilToRawType",
        ],
      ],
      "@vtrbo/utils/object": [
        [
          "deepClone",
          "utilDeepClone",
        ],
        [
          "deepMerge",
          "utilDeepMerge",
        ],
        [
          "hasOwnProperty",
          "utilHasOwnProperty",
        ],
        [
          "isKeyOf",
          "utilIsKeyOf",
        ],
        [
          "objectEntries",
          "utilObjectEntries",
        ],
        [
          "objectKeys",
          "utilObjectKeys",
        ],
        [
          "objectMap",
          "utilObjectMap",
        ],
        [
          "objectOmit",
          "utilObjectOmit",
        ],
        [
          "objectPick",
          "utilObjectPick",
        ],
      ],
      "@vtrbo/utils/random": [
        [
          "randomColor",
          "utilRandomColor",
        ],
        [
          "randomString",
          "utilRandomString",
        ],
      ],
      "@vtrbo/utils/regex": [
        [
          "isColor",
          "utilIsColor",
        ],
      ],
      "@vtrbo/utils/string": [
        [
          "capitalize",
          "utilCapitalize",
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
          "template",
          "utilTemplate",
        ],
        [
          "toSlash",
          "utilToSlash",
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
