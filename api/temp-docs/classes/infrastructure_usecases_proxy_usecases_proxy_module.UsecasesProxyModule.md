[api](../README.md) / [Exports](../modules.md) / [infrastructure/usecases-proxy/usecases-proxy.module](../modules/infrastructure_usecases_proxy_usecases_proxy_module.md) / UsecasesProxyModule

# Class: UsecasesProxyModule

[infrastructure/usecases-proxy/usecases-proxy.module](../modules/infrastructure_usecases_proxy_usecases_proxy_module.md).UsecasesProxyModule

## Table of contents

### Constructors

- [constructor](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md#constructor)

### Properties

- [IS_AUTHENTICATED_USECASES_PROXY](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md#is_authenticated_usecases_proxy)
- [LOGIN_USECASES_PROXY](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md#login_usecases_proxy)
- [LOGOUT_USECASES_PROXY](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md#logout_usecases_proxy)
- [REGISTER_USECASES_PROXY](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md#register_usecases_proxy)

### Methods

- [register](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md#register)

## Constructors

### constructor

• **new UsecasesProxyModule**(): [`UsecasesProxyModule`](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md)

#### Returns

[`UsecasesProxyModule`](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md)

## Properties

### IS_AUTHENTICATED_USECASES_PROXY

▪ `Static` **IS_AUTHENTICATED_USECASES_PROXY**: `symbol`

Symbol representing the use cases proxy for checking authentication.

#### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts:48](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts#L48)

---

### LOGIN_USECASES_PROXY

▪ `Static` `Readonly` **LOGIN_USECASES_PROXY**: typeof [`LOGIN_USECASES_PROXY`](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md#login_usecases_proxy)

Symbol representing the login use cases proxy.

#### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts:40](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts#L40)

---

### LOGOUT_USECASES_PROXY

▪ `Static` `Readonly` **LOGOUT_USECASES_PROXY**: typeof [`LOGOUT_USECASES_PROXY`](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md#logout_usecases_proxy)

Symbol representing the logout use cases proxy.

#### Defined in

[api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts:54](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/usecases-proxy/usecases-proxy.module.ts#L54)

---

### REGISTER_USECASES_PROXY

▪ `Static` `Readonly` **REGISTER_USECASES_PROXY**: typeof [`REGISTER_USECASES_PROXY`](infrastructure_usecases_proxy_usecases_proxy_module.UsecasesProxyModule.md#register_usecases_proxy)

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
