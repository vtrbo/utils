/**
 * Null 或 其他任何
 */
export type Nullable<T> = T | null | undefined

/**
 * Array 或 不是数组
 */
export type Arrayable<T> = T | Array<T>

/**
 * MergeInsertions
 */
export type MergeInsertions<T> =
  T extends object
    ? { [K in keyof T]: MergeInsertions<T[K]> }
    : T

/**
 * DeepMerge
 */
export type DeepMerge<F, S> = MergeInsertions<{
  [K in keyof F | keyof S]: K extends keyof S & keyof F
    ? DeepMerge<F[K], S[K]>
    : K extends keyof S
      ? S[K]
      : K extends keyof F
        ? F[K]
        : never;
}>
