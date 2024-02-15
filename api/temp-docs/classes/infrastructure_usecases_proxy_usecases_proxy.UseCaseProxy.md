[api](../README.md) / [Exports](../modules.md) / [infrastructure/usecases-proxy/usecases-proxy](../modules/infrastructure_usecases_proxy_usecases_proxy.md) / UseCaseProxy

# Class: UseCaseProxy\<T\>

[infrastructure/usecases-proxy/usecases-proxy](../modules/infrastructure_usecases_proxy_usecases_proxy.md).UseCaseProxy

A generic proxy class for use cases.

## Type parameters

| Name | Description               |
| :--- | :------------------------ |
| `T`  | The type of the use case. |

## Table of contents

### Constructors

- [constructor](infrastructure_usecases_proxy_usecases_proxy.UseCaseProxy.md#constructor)

### Properties

- [useCase](infrastructure_usecases_proxy_usecases_proxy.UseCaseProxy.md#usecase)

### Methods

- [getInstance](infrastructure_usecases_proxy_usecases_proxy.UseCaseProxy.md#getinstance)

## Constructors

### constructor

• **new UseCaseProxy**\<`T`\>(`useCase`): [`UseCaseProxy`](infrastructure_usecases_proxy_usecases_proxy.UseCaseProxy.md)\<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type |
| :-------- | :--- |
| `useCase` | `T`  |

#### Returns

[`UseCaseProxy`](infrastructure_usecases_proxy_usecases_proxy.UseCaseProxy.md)\<`T`\>

#### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.ts:6](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.ts#L6)

## Properties

### useCase

• `Private` `Readonly` **useCase**: `T`

#### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.ts:6](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.ts#L6)

## Methods

### getInstance

▸ **getInstance**(): `T`

#### Returns

`T`

#### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.ts:7](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.ts#L7)
