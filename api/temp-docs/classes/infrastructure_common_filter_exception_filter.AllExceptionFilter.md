[api](../README.md) / [Exports](../modules.md) / [infrastructure/common/filter/exception.filter](../modules/infrastructure_common_filter_exception_filter.md) / AllExceptionFilter

# Class: AllExceptionFilter

[infrastructure/common/filter/exception.filter](../modules/infrastructure_common_filter_exception_filter.md).AllExceptionFilter

## Implements

- `ExceptionFilter`

## Table of contents

### Constructors

- [constructor](infrastructure_common_filter_exception_filter.AllExceptionFilter.md#constructor)

### Properties

- [logger](infrastructure_common_filter_exception_filter.AllExceptionFilter.md#logger)

### Methods

- [catch](infrastructure_common_filter_exception_filter.AllExceptionFilter.md#catch)
- [logMessage](infrastructure_common_filter_exception_filter.AllExceptionFilter.md#logmessage)

## Constructors

### constructor

• **new AllExceptionFilter**(`logger`): [`AllExceptionFilter`](infrastructure_common_filter_exception_filter.AllExceptionFilter.md)

Creates an instance of the ExceptionFilter class.

#### Parameters

| Name     | Type                                                                     | Description                          |
| :------- | :----------------------------------------------------------------------- | :----------------------------------- |
| `logger` | [`LoggerService`](infrastructure_logger_logger_service.LoggerService.md) | The logger service used for logging. |

#### Returns

[`AllExceptionFilter`](infrastructure_common_filter_exception_filter.AllExceptionFilter.md)

#### Defined in

[api/src/infrastructure/common/filter/exception.filter.ts:18](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/filter/exception.filter.ts#L18)

## Properties

### logger

• `Private` `Readonly` **logger**: [`LoggerService`](infrastructure_logger_logger_service.LoggerService.md)

The logger service used for logging.

#### Defined in

[api/src/infrastructure/common/filter/exception.filter.ts:18](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/filter/exception.filter.ts#L18)

## Methods

### catch

▸ **catch**(`exception`, `host`): `void`

Catches and handles exceptions thrown during request processing.

#### Parameters

| Name        | Type            | Description                                                     |
| :---------- | :-------------- | :-------------------------------------------------------------- |
| `exception` | `Error`         | The exception that was thrown.                                  |
| `host`      | `ArgumentsHost` | The arguments host containing the request and response objects. |

#### Returns

`void`

#### Implementation of

ExceptionFilter.catch

#### Defined in

[api/src/infrastructure/common/filter/exception.filter.ts:25](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/filter/exception.filter.ts#L25)

---

### logMessage

▸ **logMessage**(`«destructured»`): `void`

Logs the error message and request details.

#### Parameters

| Name             | Type                                                                                   |
| :--------------- | :------------------------------------------------------------------------------------- |
| `«destructured»` | `Object`                                                                               |
| › `exception`    | `Error`                                                                                |
| › `message`      | [`IError`](../interfaces/domain_filter_filter_interface.IError.md)                     |
| › `request`      | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| › `status`       | `number`                                                                               |

#### Returns

`void`

#### Defined in

[api/src/infrastructure/common/filter/exception.filter.ts:61](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/filter/exception.filter.ts#L61)
