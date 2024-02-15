[api](../README.md) / [Exports](../modules.md) / [infrastructure/common/interceptor/response.interceptor](../modules/infrastructure_common_interceptor_response_interceptor.md) / ResponseInterceptor

# Class: ResponseInterceptor\<T\>

[infrastructure/common/interceptor/response.interceptor](../modules/infrastructure_common_interceptor_response_interceptor.md).ResponseInterceptor

## Type parameters

| Name |
| :--- |
| `T`  |

## Implements

- `NestInterceptor`\<`T`, [`ResponseFormat`](infrastructure_common_interceptor_response_interceptor.ResponseFormat.md)\<`T`\>\>

## Table of contents

### Constructors

- [constructor](infrastructure_common_interceptor_response_interceptor.ResponseInterceptor.md#constructor)

### Methods

- [intercept](infrastructure_common_interceptor_response_interceptor.ResponseInterceptor.md#intercept)

## Constructors

### constructor

• **new ResponseInterceptor**\<`T`\>(): [`ResponseInterceptor`](infrastructure_common_interceptor_response_interceptor.ResponseInterceptor.md)\<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Returns

[`ResponseInterceptor`](infrastructure_common_interceptor_response_interceptor.ResponseInterceptor.md)\<`T`\>

## Methods

### intercept

▸ **intercept**(`context`, `next`): `Observable`\<[`ResponseFormat`](infrastructure_common_interceptor_response_interceptor.ResponseFormat.md)\<`T`\>\>

Intercepts the incoming request and transforms the response format.

#### Parameters

| Name      | Type                   | Description                           |
| :-------- | :--------------------- | :------------------------------------ |
| `context` | `ExecutionContext`     | The execution context of the request. |
| `next`    | `CallHandler`\<`any`\> | The next call handler in the chain.   |

#### Returns

`Observable`\<[`ResponseFormat`](infrastructure_common_interceptor_response_interceptor.ResponseFormat.md)\<`T`\>\>

An observable of the transformed response format.

#### Implementation of

NestInterceptor.intercept

#### Defined in

[api/src/infrastructure/common/interceptor/response.interceptor.ts:42](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/interceptor/response.interceptor.ts#L42)
