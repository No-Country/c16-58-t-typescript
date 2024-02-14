[api](../README.md) / [Exports](../modules.md) / [usecases/auth/logout.usecases](../modules/usecases_auth_logout_usecases.md) / LogoutUseCases

# Class: LogoutUseCases

[usecases/auth/logout.usecases](../modules/usecases_auth_logout_usecases.md).LogoutUseCases

Represents the use case for logging out a user.

## Table of contents

### Constructors

- [constructor](usecases_auth_logout_usecases.LogoutUseCases.md#constructor)

### Methods

- [execute](usecases_auth_logout_usecases.LogoutUseCases.md#execute)

## Constructors

### constructor

• **new LogoutUseCases**(): [`LogoutUseCases`](usecases_auth_logout_usecases.LogoutUseCases.md)

Creates a new instance of the LogoutUseCase class.

#### Returns

[`LogoutUseCases`](usecases_auth_logout_usecases.LogoutUseCases.md)

#### Defined in

[api/src/usecases/auth/logout.usecases.ts:8](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/logout.usecases.ts#L8)

## Methods

### execute

▸ **execute**(): `Promise`\<`string`[]\>

Executes the logout use case.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of strings representing the cookies to be cleared.

#### Defined in

[api/src/usecases/auth/logout.usecases.ts:14](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/logout.usecases.ts#L14)
