# Nucleus

A collection of essential utilities designed to be the central and most important part of any Typescript Developer's toolkit.

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

## Test Coverage

|Branches|Functions|Lines|Statements|
|---|---|---|---|
|![badge-branches](./coverage/badge-branches.svg)|![badge-functions](./coverage/badge-functions.svg)|![badge-lines](./coverage/badge-lines.svg)|![badge-statements](./coverage/badge-statements.svg)|

## Getting Started

### Install

```shell
npm install --save @behaveware/nucleus
```

### Documentation

Documentation is currently inside the code and is exported using [TypeDoc](https://typedoc.org/). You can find the latest documentation [here](https://behaveware.github.io/nucleus/).

## Usage Examples

Nucleus is a collection of pure functions covering a variety of common use cases. Below are a few examples of helpful functions. The [documentation](https://behaveware.github.io/nucleus/) can be referenced for a full list of available functions, types, and constants.

### Strings

```typescript
// Capitalize
import { capitalize } from "@behaveware/nucleus";

const result = capitalize("word");
console.log(result); // Word
```

```typescript
// Filename From
import { filenameFrom } from "@behaveware/nucleus";

const nameFromUrl: string = filenameFrom("https:/www.behaveware.org/nucleus.jpeg");
console.log(nameFromUrl); // nucleus.jpeg

const nameFromFilepath: string = filenameFrom("C:\\behaveware\\nucleus\\nucleus.jpeg");
console.log(nameFromFilepath); // nucleus.jpeg
```

```typescript
// Is Email
import { isEmail } from "@behaveware/nucleus";

const trueResult: boolean = isEmail("support@behaveware.org");
console.log(trueResult); // true

const falseResult: boolean = isEmail("behaveware.org");
console.log(falseResult); // false
```

### Arrays

```typescript
// Batch Array
import { batchArray } from "@behaveware/nucleus";

const array: any[] = [
  1,
  "string",
  12,
  { size: 10 }
];

const batches = batchArray(array, 2);
console.log(batches[0]); // [ 1, 'string']
console.log(batches[1]); // [12, { size: 10 }]
```

```typescript
// Arrays are Equal
import { arraysAreEqual } from "@behaveware/nucleus";

const arrayA = [{ id: "1" }, { id: "2" }];
const arrayB = [{ id: "1" }, { id: "2" }];
const compareType = (
  a: { id: string },
  b: { id: string }
) => {
  return a.id === b.id;
}

const resultAB = arraysAreEqual(
  arrayA,
  arrayB,
  compareType
);

console.log(resultAB); // true;
```

### Bytes

```typescript
// Byte Conversion
import {
  toKilobytes,
  toMegabytes,
  toGigabytes,
  toTerabytes 
} from "@behaveware/nucleus";

const kilobytes = toKilobytes(1024);
console.log(kilobytes); // 1

const megabytes = toMegabytes(1024 * 1024);
console.log(megabytes); // 1

const gigabytes = toGigabytes(1024 * 1024 * 1024);
console.log(gigabytes); // 1

const terabytes = toTerabytes(1024 * 1024 * 1024 * 1024);
console.log(terabytes); // 1
```

```typescript
// Trim Buffer
import { trimBuffer } from "@behaveware/nucleus";

const buffer = Buffer.from("nucleus");
console.log(buffer.byteLength); // 7

const trimmedBuffer = trimBuffer(buffer, 4);
console.log(trimmedBuffer.byteLength); // 4
```

## Getting Started for Contributors

Pull down repository:

```shell
git clone https://github.com/BehaveWare/nucleus.git
```

Run all unit tests ([JEST](https://jestjs.io/)):

```shell
npm test
```

Run all tests with coverage:

```shell
npm run test:coverage
```

Run linter ([TSLint](https://palantir.github.io/tslint/)):

```shell
npm run lint
```

Run formatter ([Prettier](https://prettier.io/)):

```shell
npm run format
```
