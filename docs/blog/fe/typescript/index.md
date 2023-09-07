# TS 入门

## 什么是 TS
TS是建立在JS之上的一门语言，旨在解决JS中存在的一些问题。

## 为什么使用 TS
- 类型检测
- 代码完成
- 重构
- 新特性...

## TS 和 JS 有什么区别
TS的本质使带有类型检测的JS。

## TS 的缺点
- 需要编译
- 对于开发人员来说需要更自律

## 安装

```shell
# 全局安装
npm i typescript -g

# 本地安装（推荐）
npm i typescript
```

安装完成后我们就可以使用 `tsc`命令了。

## 配置文件
使用 `--init` 生成配置文件。

```shell
tsc --init
```
### 属性解析
```json5
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "ES2016",                                  /* 为生成的JavaScript设置JavaScript语言版本，并包含兼容的库声明 */
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for legacy experimental decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */
    // "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
    // "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* 指定源文件的根目录。 */
    // "moduleResolution": "node10",                     /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */
    // "allowImportingTsExtensions": true,               /* Allow imports to include TypeScript file extensions. Requires '--moduleResolution bundler' and either '--noEmit' or '--emitDeclarationOnly' to be set. */
    // "resolvePackageJsonExports": true,                /* Use the package.json 'exports' field when resolving package imports. */
    // "resolvePackageJsonImports": true,                /* Use the package.json 'imports' field when resolving imports. */
    // "customConditions": [],                           /* Conditions to set in addition to the resolver-specific defaults when resolving imports. */
    // "resolveJsonModule": true,                        /* Enable importing .json files. */
    // "allowArbitraryExtensions": true,                 /* Enable importing files with any extension, provided a declaration file is present. */
    // "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
    // "outDir": "./",                                   /* 为所有生成的文件指定一个输出文件夹。 */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types. */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "verbatimModuleSyntax": true,                     /* Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* 为带有隐含'any'类型的表达式和声明启用错误报告。*/
    // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
    // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
    // "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
    // "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
    // "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    // "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}

```

## 类型推断
当省略类型时，`typescript`会自动推断变量类型。  
当定义一个未初始化的变量时，该变量为 `any` 类型

```typescript
let b = 2
b = '3' // 报错

let c;
c = 1 // 不报错
c = '2' // 不报错
c = true // 不报错
```

## Any
表示没有任何限制，该类型的变量可以赋予任意类型的值。

```typescript
let c: any = 'zhang';
c = 1
c = '2'
c = true
```
::: warning
`any`会失去`typescript`的类型检查功能，应避免使用它，但在某些情况下是有用的，比如一些第三方应用。
:::

### 类型推断问题
对于开发者没有指定类型、类型推断又无法推断出类型的情况下，该类型就是`any`。  

`noImplicitAny: true`：只要推断出any类型就会报错。

```typescript
function sum(x, y) {
  return x + y;
}

sum('a', {a: 1}) // 不报错
```

### 污染问题
由于`any`不进行类型检查，将`any`类型的值赋给任何一种类型的变量，都是可行的，并且不会报错，这将将导致运行时错误。

```typescript
let a: any = 'string'
let b: number;

b = a

b.toFixed(2) // 不报错
b * 2 // 不报错

```

### unKnown
可以理解为严格版的`any`。  
`unknown`类型的值不允许赋值给其他类型的变量，不能调用`unknown`类型变量的属性和方法，只能进行比较运算等简单运算符。

```typescript
let obj: unknown = 123
let b: number;

b = obj // 报错
obj.toFixed() // 报错
obj += 1 // 报错
obj === 123 // 不报错
```

### never
类型为空，不包含任何值，可以赋值给任意其他类型。

```typescript
let a: never;
a = 1 // 报错

let f = (): never => {
  throw new Error()
}

let b: string = f() // 不报错
let c: number = f() // 不报错
```
## undefined 和 null
表示未定义和空值。  

在`typescript`中，其他任意类型都可以赋值为`undefined`和`null`，可能会造成错误。  

使用：`strictNullChecks: true`启用严格的控制检查，`undefined`和`null`就不能赋值给其他类型的变量（除了any类型和unknown类型）。

```typescript
let a:number = 1
a = null // 不报错
a = undefined // 不报错

let obj:object = undefined
obj.toString() // 不报错
```

## 字面量类型（Literal Types）
顾名思义，字面量类型的取值限定于某个值，从而可以防止一些意外赋值。

一般结合联合类型做枚举。

```typescript
let n:'zhang' = 'zhang'
n = 'zhao' // 报错

let m:'zhang' | 'wang' | 'zhao' = 'zhao' // 不报错
let o:'zhang' | 'wang' | 'zhao' = 'li'  // 报错
```

### 类型缩小（Narrowing）
联合类型由于有多个类型判断，可能会遇到无法访问类型方法的问题，这时候我们就需要`Narrowing`，将变量的类型锁紧到适合范围，才能安全的使用类型方法。

常用的类型锁紧方法：`typeof`、`ture / false`、`== / ===`、`if / else / elseif`等。

```typescript
function sum(a:number | string): number{
  if(typeof a === 'number'){
    return a.valueOf() // 这里只有数字类型的方法
  }else{
    return parseInt(a.split('')[0]) // 这里只有字符串类型的方法
  }
}
```

## 数组
数组在`typescript`里面分成两种类型，分别是数组和元组。

### 数组（array）
所有成员的类型必须相同。  

如果数组成员的类型比较复杂，可以写在圆括号里面。

```typescript
let arr:number[] = [1, 2, 3]
let arr2:string[] = ['a', 'b', 'c']

let arr3: (string | number | boolean)[] = [true, 1, 'a'] // 不报错
```
::: warning
数组的类型推断默认为数组内元素的联合类型。  

如果变量的初始值是空数组，那么`typescript`会推断数组类型是any[]。
```typescript
let arr3 = [1, '2', true] // (string | number | boolean)
arr3.push({a: 1}) // 报错

let arr = [] // any[]
```
:::

#### 只读数组
使用`var`，`let`，`const` 声明的数组是可以改变成员的。有时我们需要一个只读数组的需求，即不可以改变成员，方法是在数组类型前面加上`readonly`关键字。

```typescript
var arr = [0, 1];
arr[0] = 2; // 不报错

var arr1: readonly number[] = [0, 1];
arr1[0] = 2; // 报错
```
::: warning
只读数组和普通数组是不同的类型。普通数组是制度数组的子类型。
```typescript
const sum = (arr: number[]) => {}
const arr: readonly number[] = [1, 2]
sum(arr) // 报错

const arr1:number[] = [0, 1];
const arr2:readonly number[] = arr1; // 不报错
arr1 = arr2; // 报错
```
:::

#### 多维数组
```typescript
const arr:number[][] = [[1,2,3], [1,2,3]]
```

### 元组（Tuples）
元组并且必须明确声明每个成员的类型。  

可以用扩展运算符`...`表示不限长度的元组。

```typescript
const arr:[number, string] = [1, 'a']

const arr1:[number, ...string[], number] = [1,'2','3', 4]
const arr2:[...any[]] = [1,'2', true, {a: 1}]
```

#### 只读元组

```typescript
const arr: readonly [number, string] = [1, 'a']
```

#### 长度推断
`typescript`会自动推断元组的长度。

如果使用扩展运算符将无法推断。

```typescript
type Tuple = readonly [string, number?, Date?];
const a: Tuple = ['1']
a.length === 5 // 报错

type Tuple1 = readonly [string, ...number[]];
const b: Tuple1 = ['1',1]
b.length === 5 // 不报错
```

::: danger
虽然`Tuples`规定了数组内元素类型，但是使用`push`方法可用并且不会报错。
```typescript
let arr3:[number, string] = [1, 'a']
arr3.push(1) // 不报错
```
:::

## Enums
定义一组命名的常量。

```typescript
const enum Size{
    S = 1,
    M,
    L
}

let y:Size = Size.M // 2
```
::: warning
- 如果不设置初始值，将会从`0`开始。
```typescript
const enum Size{
  S, // 0
  M, // 1
  L // 2
}

let y:Size = Size.M // 1
```
- 异构枚举（字符串枚举和数字枚举混合）
```typescript
const enum Size{
  S = 0,
  M = 'M'
}

let y:Size = Size.M // M
```
:::

## Functions
规定函数形参和返回值的数据类型。

```typescript
type func =  (a: string, b: string) => void
let greet: func = (a, b)=>{
  console.log(a + b)
}

greet(1, 2) // error
greet('1', '2')

```

::: tip
- 忽略函数返回值默认为`void`类型
- 检测未使用的形参：`noUnusedParameters: true`。
- 检测未使用的变量：`noUnusedLocals: true`。
- 隐式返回检测：`noImplicitReturns: true`，全路径下都必须有返回值。
```typescript
function loop(a: number){
  if(a > 100){
    return a * 2
  }
  // error
}
```
:::

## Objects
使用对象（不推荐）或者自定义类型来规定对象类型。

```typescript
// 使用对象类型
const personal:{
  readonly id: number,
  name: string,
  age: number,
  local?: boolean
} = {
  id: 1,
  name: 'zhang',
  age: 28
}

// 使用自定义类型
type Personal = {
  readonly id: number,
  name: string,
  age: number,
  local?: boolean
}

const personal1: Personal = {
  id: 1,
  name: 'zhang',
  age: 28
}
```

::: warning
不推荐直接使用对象，可读性低，不可复用。
:::

## Union Types（联合类型）
可以为变量或函数参数提供多个类型选择。

```typescript
function sum(a:number | string): number{
  return a
}
```



## 交叉类型（Intersection Types）
类型A与类型B取交集会产生新的类型，这个类型包含的对象既属于A类型又属于B类型。

```typescript
type A = {
  name: string
}

type B = {
  age: number,
}

type C = A & B

const c: C = {
  name: 'zhang',
  age: 13
}
```



## Nullable Types
`strictNullChecks: true`，当值为 null 或 undefined 时，你需要在对该值使用方法或属性之前测试这些值。

```typescript
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
```












