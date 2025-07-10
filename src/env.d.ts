/// <reference types="vite/client" />
declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
// Extend ImportMeta so TS knows about glob()
interface ImportMeta {
  /**
   * Glob import with options; returns a record of paths → modules.
   * Supports `eager` and `import` options.
   * @see https://vitejs.dev/guide/features.html#glob-import
   */
  readonly glob: <T = any>(
    patterns: string | string[],
    options?: { eager?: boolean; import?: string }
  ) => Record<string, { default: T }>;
}