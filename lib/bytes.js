"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTerabytes = exports.toGigabytes = exports.toMegabytes = exports.toKilobytes = exports.trimBuffer = exports.TERABYTE_SIZE = exports.GIGABYTE_SIZE = exports.MEGABYTE_SIZE = exports.KILOBYTE_SIZE = void 0;
/**
 * The size of a KB in base 2. [More Info](https://qualifications.pearson.com/content/dam/pdf/subject-updates/ICT/KB-vs-kpbs.pdf)
 */
exports.KILOBYTE_SIZE = 1024;
/**
 * The size of a MB in base 2. [More Info](https://qualifications.pearson.com/content/dam/pdf/subject-updates/ICT/KB-vs-kpbs.pdf)
 */
exports.MEGABYTE_SIZE = exports.KILOBYTE_SIZE * exports.KILOBYTE_SIZE;
/**
 * The size of a GB in base 2. [More Info](https://qualifications.pearson.com/content/dam/pdf/subject-updates/ICT/KB-vs-kpbs.pdf)
 */
exports.GIGABYTE_SIZE = exports.MEGABYTE_SIZE * exports.KILOBYTE_SIZE;
/**
 * The size of a TB in base 2. [More Info](https://qualifications.pearson.com/content/dam/pdf/subject-updates/ICT/KB-vs-kpbs.pdf)
 */
exports.TERABYTE_SIZE = exports.GIGABYTE_SIZE * exports.KILOBYTE_SIZE;
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
const trimBuffer = (buffer, maxSize) => {
    const ratio = maxSize / buffer.byteLength;
    if (ratio >= 1) {
        return buffer;
    }
    const endIndex = buffer.length * ratio;
    return buffer.slice(0, endIndex);
};
exports.trimBuffer = trimBuffer;
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
const toKilobytes = (bytes) => bytes / exports.KILOBYTE_SIZE;
exports.toKilobytes = toKilobytes;
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
const toMegabytes = (bytes) => bytes / exports.MEGABYTE_SIZE;
exports.toMegabytes = toMegabytes;
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
const toGigabytes = (bytes) => bytes / exports.GIGABYTE_SIZE;
exports.toGigabytes = toGigabytes;
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
const toTerabytes = (bytes) => bytes / exports.TERABYTE_SIZE;
exports.toTerabytes = toTerabytes;
