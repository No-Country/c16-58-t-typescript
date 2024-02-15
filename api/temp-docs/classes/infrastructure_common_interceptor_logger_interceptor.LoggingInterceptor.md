[api](../README.md) / [Exports](../modules.md) / [infrastructure/common/interceptor/logger.interceptor](../modules/infrastructure_common_interceptor_logger_interceptor.md) / LoggingInterceptor

# Class: LoggingInterceptor

[infrastructure/common/interceptor/logger.interceptor](../modules/infrastructure_common_interceptor_logger_interceptor.md).LoggingInterceptor

## Implements

- `NestInterceptor`

## Table of contents

### Constructors

- [constructor](infrastructure_common_interceptor_logger_interceptor.LoggingInterceptor.md#constructor)

### Properties

- [logger](infrastructure_common_interceptor_logger_interceptor.LoggingInterceptor.md#logger)

### Methods

- [getIP](infrastructure_common_interceptor_logger_interceptor.LoggingInterceptor.md#getip)
- [intercept](infrastructure_common_interceptor_logger_interceptor.LoggingInterceptor.md#intercept)

## Constructors

### constructor

• **new LoggingInterceptor**(`logger`): [`LoggingInterceptor`](infrastructure_common_interceptor_logger_interceptor.LoggingInterceptor.md)

Creates an instance of the LoggerInterceptor class.

#### Parameters

| Name     | Type                                                                     | Description                          |
| :------- | :----------------------------------------------------------------------- | :----------------------------------- |
| `logger` | [`LoggerService`](infrastructure_logger_logger_service.LoggerService.md) | The logger service used for logging. |

#### Returns

[`LoggingInterceptor`](infrastructure_common_interceptor_logger_interceptor.LoggingInterceptor.md)

#### Defined in

[api/src/infrastructure/common/interceptor/logger.interceptor.ts:17](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/interceptor/logger.interceptor.ts#L17)

## Properties

### logger

• `Private` `Readonly` **logger**: [`LoggerService`](infrastructure_logger_logger_service.LoggerService.md)

The logger service used for logging.

#### Defined in

[api/src/infrastructure/common/interceptor/logger.interceptor.ts:17](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/interceptor/logger.interceptor.ts#L17)

## Methods

### getIP

▸ **getIP**(`request`): `string`

Retrieves the IP address from the request object.

#### Parameters

| Name                                       | Type     | Description                                                           |
| :----------------------------------------- | :------- | :-------------------------------------------------------------------- |
| `request`                                  | `Object` | The request object containing the headers and connection information. |
| `request.request`                          | `Object` | -                                                                     |
| `request.request.connection`               | `Object` | -                                                                     |
| `request.request.connection.remoteAddress` | `string` | -                                                                     |
| `request.request.headers`                  | `Object` | -                                                                     |
| `request.request.headers.x-forwarded-for`  | `string` | -                                                                     |

#### Returns

`string`

The IP address as a string.

#### Defined in

[api/src/infrastructure/common/interceptor/logger.interceptor.ts:52](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/interceptor/logger.interceptor.ts#L52)

---

### intercept

▸ **intercept**(`context`, `next`): `Observable`\<`any`\>

Intercepts incoming requests and logs information about the request and response.

#### Parameters

| Name      | Type                   | Description                           |
| :-------- | :--------------------- | :------------------------------------ |
| `context` | `ExecutionContext`     | The execution context of the request. |
| `next`    | `CallHandler`\<`any`\> | The next call handler in the chain.   |

#### Returns

`Observable`\<`any`\>

An observable that represents the response stream.

#### Implementation of

NestInterceptor.intercept

#### Defined in

[api/src/infrastructure/common/interceptor/logger.interceptor.ts:25](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/interceptor/logger.interceptor.ts#L25)
