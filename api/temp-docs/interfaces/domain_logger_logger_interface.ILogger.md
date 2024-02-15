[api](../README.md) / [Exports](../modules.md) / [domain/logger/logger.interface](../modules/domain_logger_logger_interface.md) / ILogger

# Interface: ILogger

[domain/logger/logger.interface](../modules/domain_logger_logger_interface.md).ILogger

Represents a logger interface.

## Implemented by

- [`LoggerService`](../classes/infrastructure_logger_logger_service.LoggerService.md)

## Table of contents

### Methods

- [debug](domain_logger_logger_interface.ILogger.md#debug)
- [error](domain_logger_logger_interface.ILogger.md#error)
- [log](domain_logger_logger_interface.ILogger.md#log)
- [verbose](domain_logger_logger_interface.ILogger.md#verbose)
- [warn](domain_logger_logger_interface.ILogger.md#warn)

## Methods

### debug

▸ **debug**(`context`, `message`): `void`

Logs a debug message.

#### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `context` | `string` | The context of the log message. |
| `message` | `string` | The log message.                |

#### Returns

`void`

#### Defined in

[api/src/domain/logger/logger.interface.ts:10](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/logger/logger.interface.ts#L10)

---

### error

▸ **error**(`context`, `message`, `trace?`): `void`

Logs an error message.

#### Parameters

| Name      | Type     | Description                             |
| :-------- | :------- | :-------------------------------------- |
| `context` | `string` | The context of the log message.         |
| `message` | `string` | The log message.                        |
| `trace?`  | `string` | Optional. The stack trace of the error. |

#### Returns

`void`

#### Defined in

[api/src/domain/logger/logger.interface.ts:25](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/logger/logger.interface.ts#L25)

---

### log

▸ **log**(`context`, `message`): `void`

Logs an informational message.

#### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `context` | `string` | The context of the log message. |
| `message` | `string` | The log message.                |

#### Returns

`void`

#### Defined in

[api/src/domain/logger/logger.interface.ts:17](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/logger/logger.interface.ts#L17)

---

### verbose

▸ **verbose**(`context`, `message`): `void`

Logs a verbose message.

#### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `context` | `string` | The context of the log message. |
| `message` | `string` | The log message.                |

#### Returns

`void`

#### Defined in

[api/src/domain/logger/logger.interface.ts:39](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/logger/logger.interface.ts#L39)

---

### warn

▸ **warn**(`context`, `message`): `void`

Logs a warning message.

#### Parameters

| Name      | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| `context` | `string` | The context of the log message. |
| `message` | `string` | The log message.                |

#### Returns

`void`

#### Defined in

[api/src/domain/logger/logger.interface.ts:32](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/logger/logger.interface.ts#L32)
