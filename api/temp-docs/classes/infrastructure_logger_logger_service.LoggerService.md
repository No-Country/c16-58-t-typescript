[api](../README.md) / [Exports](../modules.md) / [infrastructure/logger/logger.service](../modules/infrastructure_logger_logger_service.md) / LoggerService

# Class: LoggerService

[infrastructure/logger/logger.service](../modules/infrastructure_logger_logger_service.md).LoggerService

LoggerService class that extends Logger and implements ILogger.
Provides logging functionality for the application.

## Hierarchy

- `Logger`

  ↳ **`LoggerService`**

## Implements

- [`ILogger`](../interfaces/domain_logger_logger_interface.ILogger.md)

## Table of contents

### Constructors

- [constructor](infrastructure_logger_logger_service.LoggerService.md#constructor)

### Properties

- [context](infrastructure_logger_logger_service.LoggerService.md#context)
- [localInstanceRef](infrastructure_logger_logger_service.LoggerService.md#localinstanceref)
- [options](infrastructure_logger_logger_service.LoggerService.md#options)
- [logBuffer](infrastructure_logger_logger_service.LoggerService.md#logbuffer)
- [logLevels](infrastructure_logger_logger_service.LoggerService.md#loglevels)
- [staticInstanceRef](infrastructure_logger_logger_service.LoggerService.md#staticinstanceref)

### Accessors

- [localInstance](infrastructure_logger_logger_service.LoggerService.md#localinstance)

### Methods

- [debug](infrastructure_logger_logger_service.LoggerService.md#debug)
- [error](infrastructure_logger_logger_service.LoggerService.md#error)
- [fatal](infrastructure_logger_logger_service.LoggerService.md#fatal)
- [log](infrastructure_logger_logger_service.LoggerService.md#log)
- [verbose](infrastructure_logger_logger_service.LoggerService.md#verbose)
- [warn](infrastructure_logger_logger_service.LoggerService.md#warn)
- [attachBuffer](infrastructure_logger_logger_service.LoggerService.md#attachbuffer)
- [debug](infrastructure_logger_logger_service.LoggerService.md#debug-1)
- [detachBuffer](infrastructure_logger_logger_service.LoggerService.md#detachbuffer)
- [error](infrastructure_logger_logger_service.LoggerService.md#error-1)
- [fatal](infrastructure_logger_logger_service.LoggerService.md#fatal-1)
- [flush](infrastructure_logger_logger_service.LoggerService.md#flush)
- [getTimestamp](infrastructure_logger_logger_service.LoggerService.md#gettimestamp)
- [isLevelEnabled](infrastructure_logger_logger_service.LoggerService.md#islevelenabled)
- [log](infrastructure_logger_logger_service.LoggerService.md#log-1)
- [overrideLogger](infrastructure_logger_logger_service.LoggerService.md#overridelogger)
- [verbose](infrastructure_logger_logger_service.LoggerService.md#verbose-1)
- [warn](infrastructure_logger_logger_service.LoggerService.md#warn-1)

## Constructors

### constructor

• **new LoggerService**(): [`LoggerService`](infrastructure_logger_logger_service.LoggerService.md)

#### Returns

[`LoggerService`](infrastructure_logger_logger_service.LoggerService.md)

#### Inherited from

Logger.constructor

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:63

• **new LoggerService**(`context`): [`LoggerService`](infrastructure_logger_logger_service.LoggerService.md)

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `context` | `string` |

#### Returns

[`LoggerService`](infrastructure_logger_logger_service.LoggerService.md)

#### Inherited from

Logger.constructor

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:64

• **new LoggerService**(`context`, `options?`): [`LoggerService`](infrastructure_logger_logger_service.LoggerService.md)

#### Parameters

| Name                 | Type      |
| :------------------- | :-------- |
| `context`            | `string`  |
| `options?`           | `Object`  |
| `options.timestamp?` | `boolean` |

#### Returns

[`LoggerService`](infrastructure_logger_logger_service.LoggerService.md)

#### Inherited from

Logger.constructor

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:65

## Properties

### context

• `Protected` `Optional` **context**: `string`

#### Inherited from

Logger.context

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:53

---

### localInstanceRef

• `Protected` `Optional` **localInstanceRef**: `LoggerService`

#### Inherited from

Logger.localInstanceRef

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:61

---

### options

• `Protected` **options**: `Object`

#### Type declaration

| Name         | Type      |
| :----------- | :-------- |
| `timestamp?` | `boolean` |

#### Inherited from

Logger.options

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:54

---

### logBuffer

▪ `Static` `Protected` **logBuffer**: `LogBufferRecord`[]

#### Inherited from

Logger.logBuffer

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:57

---

### logLevels

▪ `Static` `Protected` `Optional` **logLevels**: `LogLevel`[]

#### Inherited from

Logger.logLevels

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:59

---

### staticInstanceRef

▪ `Static` `Protected` `Optional` **staticInstanceRef**: `LoggerService`

#### Inherited from

Logger.staticInstanceRef

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:58

## Accessors

### localInstance

• `get` **localInstance**(): `LoggerService`

#### Returns

`LoggerService`

#### Inherited from

Logger.localInstance

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:68

## Methods

### debug

▸ **debug**(`context`, `message`): `void`

Logs a debug message with the specified context.

#### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `context` | `string` | The context of the log message. |
| `message` | `string` | The debug message to log.       |

#### Returns

`void`

#### Implementation of

[ILogger](../interfaces/domain_logger_logger_interface.ILogger.md).[debug](../interfaces/domain_logger_logger_interface.ILogger.md#debug)

#### Overrides

Logger.debug

#### Defined in

[api/src/infrastructure/logger/logger.service.ts:32](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/logger/logger.service.ts#L32)

---

### error

▸ **error**(`context`, `message`, `trace?`): `void`

Logs an error message with the specified context and optional trace.

#### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `context` | `string` | The context of the log message. |
| `message` | `string` | The error message to log.       |
| `trace?`  | `string` | Optional trace information.     |

#### Returns

`void`

#### Implementation of

[ILogger](../interfaces/domain_logger_logger_interface.ILogger.md).[error](../interfaces/domain_logger_logger_interface.ILogger.md#error)

#### Overrides

Logger.error

#### Defined in

[api/src/infrastructure/logger/logger.service.ts:55](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/logger/logger.service.ts#L55)

---

### fatal

▸ **fatal**(`message`, `context?`): `void`

Write a 'fatal' level log.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `message`  | `any`    |
| `context?` | `string` |

#### Returns

`void`

#### Inherited from

Logger.fatal

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:97

▸ **fatal**(`message`, `...optionalParams`): `void`

#### Parameters

| Name                | Type    |
| :------------------ | :------ |
| `message`           | `any`   |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Inherited from

Logger.fatal

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:98

---

### log

▸ **log**(`context`, `message`): `void`

Logs an info message with the specified context.

#### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `context` | `string` | The context of the log message. |
| `message` | `string` | The info message to log.        |

#### Returns

`void`

#### Implementation of

[ILogger](../interfaces/domain_logger_logger_interface.ILogger.md).[log](../interfaces/domain_logger_logger_interface.ILogger.md#log)

#### Overrides

Logger.log

#### Defined in

[api/src/infrastructure/logger/logger.service.ts:44](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/logger/logger.service.ts#L44)

---

### verbose

▸ **verbose**(`context`, `message`): `void`

Logs a verbose message with the specified context.

#### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `context` | `string` | The context of the log message. |
| `message` | `string` | The verbose message to log.     |

#### Returns

`void`

#### Implementation of

[ILogger](../interfaces/domain_logger_logger_interface.ILogger.md).[verbose](../interfaces/domain_logger_logger_interface.ILogger.md#verbose)

#### Overrides

Logger.verbose

#### Defined in

[api/src/infrastructure/logger/logger.service.ts:75](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/logger/logger.service.ts#L75)

---

### warn

▸ **warn**(`context`, `message`): `void`

Logs a warning message with the specified context.

#### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `context` | `string` | The context of the log message. |
| `message` | `string` | The warning message to log.     |

#### Returns

`void`

#### Implementation of

[ILogger](../interfaces/domain_logger_logger_interface.ILogger.md).[warn](../interfaces/domain_logger_logger_interface.ILogger.md#warn)

#### Overrides

Logger.warn

#### Defined in

[api/src/infrastructure/logger/logger.service.ts:65](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/logger/logger.service.ts#L65)

---

### attachBuffer

▸ **attachBuffer**(): `void`

Attach buffer.
Turns on initialization logs buffering.

#### Returns

`void`

#### Inherited from

Logger.attachBuffer

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:140

---

### debug

▸ **debug**(`message`, `context?`): `void`

Write a 'debug' level log, if the configured level allows for it.
Prints to `stdout` with newline.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `message`  | `any`    |
| `context?` | `string` |

#### Returns

`void`

#### Inherited from

Logger.debug

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:120

▸ **debug**(`message`, `...optionalParams`): `void`

#### Parameters

| Name                | Type    |
| :------------------ | :------ |
| `message`           | `any`   |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Inherited from

Logger.debug

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:121

---

### detachBuffer

▸ **detachBuffer**(): `void`

Detach buffer.
Turns off initialization logs buffering.

#### Returns

`void`

#### Inherited from

Logger.detachBuffer

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:145

---

### error

▸ **error**(`message`, `stackOrContext?`): `void`

Write an 'error' level log.

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `message`         | `any`    |
| `stackOrContext?` | `string` |

#### Returns

`void`

#### Inherited from

Logger.error

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:102

▸ **error**(`message`, `context?`): `void`

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `message`  | `any`    |
| `context?` | `string` |

#### Returns

`void`

#### Inherited from

Logger.error

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:103

▸ **error**(`message`, `stack?`, `context?`): `void`

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `message`  | `any`    |
| `stack?`   | `string` |
| `context?` | `string` |

#### Returns

`void`

#### Inherited from

Logger.error

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:104

▸ **error**(`message`, `...optionalParams`): `void`

#### Parameters

| Name                | Type    |
| :------------------ | :------ |
| `message`           | `any`   |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Inherited from

Logger.error

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:105

---

### fatal

▸ **fatal**(`message`, `context?`): `void`

Write a 'fatal' level log.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `message`  | `any`    |
| `context?` | `string` |

#### Returns

`void`

#### Inherited from

Logger.fatal

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:130

▸ **fatal**(`message`, `...optionalParams`): `void`

#### Parameters

| Name                | Type    |
| :------------------ | :------ |
| `message`           | `any`   |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Inherited from

Logger.fatal

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:131

---

### flush

▸ **flush**(): `void`

Print buffered logs and detach buffer.

#### Returns

`void`

#### Inherited from

Logger.flush

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:135

---

### getTimestamp

▸ **getTimestamp**(): `string`

#### Returns

`string`

#### Inherited from

Logger.getTimestamp

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:146

---

### isLevelEnabled

▸ **isLevelEnabled**(`level`): `boolean`

#### Parameters

| Name    | Type       |
| :------ | :--------- |
| `level` | `LogLevel` |

#### Returns

`boolean`

#### Inherited from

Logger.isLevelEnabled

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:148

---

### log

▸ **log**(`message`, `context?`): `void`

Write a 'log' level log.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `message`  | `any`    |
| `context?` | `string` |

#### Returns

`void`

#### Inherited from

Logger.log

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:109

▸ **log**(`message`, `...optionalParams`): `void`

#### Parameters

| Name                | Type    |
| :------------------ | :------ |
| `message`           | `any`   |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Inherited from

Logger.log

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:110

---

### overrideLogger

▸ **overrideLogger**(`logger`): `any`

#### Parameters

| Name     | Type                                         |
| :------- | :------------------------------------------- |
| `logger` | `boolean` \| `LoggerService` \| `LogLevel`[] |

#### Returns

`any`

#### Inherited from

Logger.overrideLogger

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:147

---

### verbose

▸ **verbose**(`message`, `context?`): `void`

Write a 'verbose' level log.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `message`  | `any`    |
| `context?` | `string` |

#### Returns

`void`

#### Inherited from

Logger.verbose

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:125

▸ **verbose**(`message`, `...optionalParams`): `void`

#### Parameters

| Name                | Type    |
| :------------------ | :------ |
| `message`           | `any`   |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Inherited from

Logger.verbose

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:126

---

### warn

▸ **warn**(`message`, `context?`): `void`

Write a 'warn' level log.

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `message`  | `any`    |
| `context?` | `string` |

#### Returns

`void`

#### Inherited from

Logger.warn

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:114

▸ **warn**(`message`, `...optionalParams`): `void`

#### Parameters

| Name                | Type    |
| :------------------ | :------ |
| `message`           | `any`   |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Inherited from

Logger.warn

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/services/logger.service.d.ts:115
