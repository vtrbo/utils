// objKeys
export type ObjKeysReturnType<T> = Array<`${keyof T & (string | number | boolean | null | undefined)}`>

// objEntries
export type ObjEntriesReturnType<T> = Array<[keyof T, T[keyof T]]>

// deepMerge
export type DeepMergeMergeInsertions<T> =
  T extends object
    ? { [K in keyof T]: DeepMergeMergeInsertions<T[K]> }
    : T

export type DeepMerge<F, S> = DeepMergeMergeInsertions<{
  [K in keyof F | keyof S]: K extends keyof S & keyof F
    ? DeepMerge<F[K], S[K]>
    : K extends keyof S
      ? S[K]
      : K extends keyof F
        ? F[K]
        : never;
}>
