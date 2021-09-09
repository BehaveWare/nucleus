/// <reference types="node" />
/**
 * The size of a KB in base 2. [More Info](https://qualifications.pearson.com/content/dam/pdf/subject-updates/ICT/KB-vs-kpbs.pdf)
 */
export declare const KILOBYTE_SIZE = 1024;
/**
 * The size of a MB in base 2. [More Info](https://qualifications.pearson.com/content/dam/pdf/subject-updates/ICT/KB-vs-kpbs.pdf)
 */
export declare const MEGABYTE_SIZE: number;
/**
 * The size of a GB in base 2. [More Info](https://qualifications.pearson.com/content/dam/pdf/subject-updates/ICT/KB-vs-kpbs.pdf)
 */
export declare const GIGABYTE_SIZE: number;
/**
 * The size of a TB in base 2. [More Info](https://qualifications.pearson.com/content/dam/pdf/subject-updates/ICT/KB-vs-kpbs.pdf)
 */
export declare const TERABYTE_SIZE: number;
/**
 * Trim the Buffer to a max size in bytes.
 *
 * **Example:**
 * ```
 * const buffer = Buffer.from("nucleus");
 * console.log(buffer.byteLength); // 7
 *
 * const trimmedBuffer = trimBuffer(buffer, 4);
 * console.log(trimmedBuffer.byteLength); // 4
 * ```
 * @param buffer Buffer to be trimmed
 * @param maxSize Max size in bytes to trim to
 * @returns The trimmed Buffer
 */
export declare const trimBuffer: (buffer: Buffer, maxSize: number) => Buffer;
/**
 * Converts bytes to kilobytes.
 *
 * **Example:**
 * ```
 * const kilobytes = toKilobytes(1024);
 * console.log(kilobytes); // 1
 * ```
 * @param bytes Number of bytes
 * @returns Number of kilobytes
 */
export declare const toKilobytes: (bytes: number) => number;
/**
 * Converts bytes to megabytes.
 *
 * **Example:**
 * ```
 * const megabytes = toMegabytes(1024 * 1024);
 * console.log(megabytes); // 1
 * ```
 * @param bytes Number of bytes
 * @returns Number of megabytes
 */
export declare const toMegabytes: (bytes: number) => number;
/**
 * Converts bytes to gigabytes.
 *
 * **Example:**
 * ```
 * const gigabytes = toGigabytes(1024 * 1024 * 1024);
 * console.log(gigabytes); // 1
 * ```
 * @param bytes Number of bytes
 * @returns Number of gigabytes
 */
export declare const toGigabytes: (bytes: number) => number;
/**
 * Converts bytes to terabytes.
 *
 * **Example:**
 * ```
 * const terabytes = toTerabytes(1024 * 1024 * 1024 * 1024);
 * console.log(terabytes); // 1
 * ```
 * @param bytes Number of bytes
 * @returns Number of terabytes
 */
export declare const toTerabytes: (bytes: number) => number;
