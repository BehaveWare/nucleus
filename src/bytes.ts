/**
 * The size of a KB in base 2. [More Info](https://qualifications.pearson.com/content/dam/pdf/subject-updates/ICT/KB-vs-kpbs.pdf)
 */
export const KILOBYTE_SIZE = 1024;

/**
 * The size of a MB in base 2. [More Info](https://qualifications.pearson.com/content/dam/pdf/subject-updates/ICT/KB-vs-kpbs.pdf)
 */
export const MEGABYTE_SIZE = KILOBYTE_SIZE * KILOBYTE_SIZE;

/**
 * The size of a GB in base 2. [More Info](https://qualifications.pearson.com/content/dam/pdf/subject-updates/ICT/KB-vs-kpbs.pdf)
 */
export const GIGABYTE_SIZE = MEGABYTE_SIZE * KILOBYTE_SIZE;

/**
 * The size of a TB in base 2. [More Info](https://qualifications.pearson.com/content/dam/pdf/subject-updates/ICT/KB-vs-kpbs.pdf)
 */
export const TERABYTE_SIZE = GIGABYTE_SIZE * KILOBYTE_SIZE;

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
export const trimBuffer = (buffer: Buffer, maxSize: number) => {
  const ratio = maxSize / buffer.byteLength;
  if (ratio >= 1) {
    return buffer;
  }

  const endIndex = buffer.length * ratio;
  return buffer.slice(0, endIndex);
};

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
export const toKilobytes = (bytes: number) => bytes / KILOBYTE_SIZE;

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
export const toMegabytes = (bytes: number) => bytes / MEGABYTE_SIZE;

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
export const toGigabytes = (bytes: number) => bytes / GIGABYTE_SIZE;

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
export const toTerabytes = (bytes: number) => bytes / TERABYTE_SIZE;
