[api](../README.md) / [Exports](../modules.md) / [infrastructure/usecases-proxy/usecases-proxy.module](../modules/infrastructure_usecases_proxy_usecases_proxy_module.md) / UsecasesProxyModule

# Class: UsecasesProxyModule

[infrastructure/usecases-proxy/usecases-proxy.module](../modules/infrastructure_usecases_proxy_usecases_proxy_module.md).UsecasesProxyModule

## Table of contents

### Constructors

- [constructor](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md#constructor)

### Properties

- [IS\_AUTHENTICATED\_USECASES\_PROXY](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md#is_authenticated_usecases_proxy)
- [LOGIN\_USECASES\_PROXY](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md#login_usecases_proxy)
- [LOGOUT\_USECASES\_PROXY](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md#logout_usecases_proxy)
- [REGISTER\_USECASES\_PROXY](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md#register_usecases_proxy)

### Methods

- [register](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md#register)

## Constructors

### constructor

• **new UsecasesProxyModule**(): [`UsecasesProxyModule`](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md)

#### Returns

[`UsecasesProxyModule`](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md)

## Properties

### IS\_AUTHENTICATED\_USECASES\_PROXY

▪ `Static` **IS\_AUTHENTICATED\_USECASES\_PROXY**: `symbol`

Symbol representing the use cases proxy for checking authentication.

#### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts:48](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts#L48)

___

### LOGIN\_USECASES\_PROXY

▪ `Static` `Readonly` **LOGIN\_USECASES\_PROXY**: typeof [`LOGIN_USECASES_PROXY`](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md#login_usecases_proxy)

Symbol representing the login use cases proxy.

#### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts:40](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts#L40)

___

### LOGOUT\_USECASES\_PROXY

▪ `Static` `Readonly` **LOGOUT\_USECASES\_PROXY**: typeof [`LOGOUT_USECASES_PROXY`](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md#logout_usecases_proxy)

Symbol representing the logout use cases proxy.

#### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts:54](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts#L54)

___

### REGISTER\_USECASES\_PROXY

▪ `Static` `Readonly` **REGISTER\_USECASES\_PROXY**: typeof [`REGISTER_USECASES_PROXY`](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md#register_usecases_proxy)

Symbol used for registering use cases proxy.

#### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts:44](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts#L44)

## Methods

### register

▸ **register**(): `DynamicModule`

Registers the UsecasesProxyModule.

#### Returns

`DynamicModule`

A dynamic module configuration object.

#### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts:60](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts#L60)
