[api](../README.md) / [Exports](../modules.md) / [usecases/auth/isAuthenticated.usecases](../modules/usecases_auth_isAuthenticated_usecases.md) / IsAuthenticatedUseCases

# Class: IsAuthenticatedUseCases

[usecases/auth/isAuthenticated.usecases](../modules/usecases_auth_isAuthenticated_usecases.md).IsAuthenticatedUseCases

## Table of contents

### Constructors

- [constructor](usecases_auth_isAuthenticated_usecases.IsAuthenticatedUseCases.md#constructor)

### Properties

- [adminUserRepo](usecases_auth_isAuthenticated_usecases.IsAuthenticatedUseCases.md#adminuserrepo)

### Methods

- [execute](usecases_auth_isAuthenticated_usecases.IsAuthenticatedUseCases.md#execute)

## Constructors

### constructor

• **new IsAuthenticatedUseCases**(`adminUserRepo`): [`IsAuthenticatedUseCases`](usecases_auth_isAuthenticated_usecases.IsAuthenticatedUseCases.md)

Constructs a new instance of the `isAuthenticated` use case.

#### Parameters

| Name            | Type                                                                                             | Description                     |
| :-------------- | :----------------------------------------------------------------------------------------------- | :------------------------------ |
| `adminUserRepo` | [`UserRepository`](../interfaces/domain_repositories_userRepository_interface.UserRepository.md) | The repository for admin users. |

#### Returns

[`IsAuthenticatedUseCases`](usecases_auth_isAuthenticated_usecases.IsAuthenticatedUseCases.md)

#### Defined in

[api/src/usecases/auth/isAuthenticated.usecases.ts:9](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/isAuthenticated.usecases.ts#L9)

## Properties

### adminUserRepo

• `Private` `Readonly` **adminUserRepo**: [`UserRepository`](../interfaces/domain_repositories_userRepository_interface.UserRepository.md)

The repository for admin users.

#### Defined in

[api/src/usecases/auth/isAuthenticated.usecases.ts:9](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/isAuthenticated.usecases.ts#L9)

## Methods

### execute

▸ **execute**(`username`): `Promise`\<[`User`](domain_model_user.User.md)\>

Executes the isAuthenticated use case.
Retrieves a user by their username.

#### Parameters

| Name       | Type     | Description                           |
| :--------- | :------- | :------------------------------------ |
| `username` | `string` | The username of the user to retrieve. |

#### Returns

`Promise`\<[`User`](domain_model_user.User.md)\>

A Promise that resolves to the retrieved User object.

#### Defined in

[api/src/usecases/auth/isAuthenticated.usecases.ts:18](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/isAuthenticated.usecases.ts#L18)
