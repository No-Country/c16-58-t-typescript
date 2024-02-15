[api](../README.md) / [Exports](../modules.md) / [usecases/auth/register.usecases](../modules/usecases_auth_register_usecases.md) / RegisterUseCases

# Class: RegisterUseCases

[usecases/auth/register.usecases](../modules/usecases_auth_register_usecases.md).RegisterUseCases

## Table of contents

### Constructors

- [constructor](usecases_auth_register_usecases.RegisterUseCases.md#constructor)

### Properties

- [bcryptService](usecases_auth_register_usecases.RegisterUseCases.md#bcryptservice)
- [userRepository](usecases_auth_register_usecases.RegisterUseCases.md#userrepository)

### Methods

- [checkPassword](usecases_auth_register_usecases.RegisterUseCases.md#checkpassword)
- [registerUser](usecases_auth_register_usecases.RegisterUseCases.md#registeruser)
- [userShouldNotExist](usecases_auth_register_usecases.RegisterUseCases.md#usershouldnotexist)

## Constructors

### constructor

• **new RegisterUseCases**(`userRepository`, `bcryptService`): [`RegisterUseCases`](usecases_auth_register_usecases.RegisterUseCases.md)

Constructs a new instance of the RegisterUseCases class.

#### Parameters

| Name             | Type                                                                                             | Description          |
| :--------------- | :----------------------------------------------------------------------------------------------- | :------------------- |
| `userRepository` | [`UserRepository`](../interfaces/domain_repositories_userRepository_interface.UserRepository.md) | The user repository. |
| `bcryptService`  | [`IBcryptService`](../interfaces/domain_adapters_bcrypt_interface.IBcryptService.md)             | The bcrypt service.  |

#### Returns

[`RegisterUseCases`](usecases_auth_register_usecases.RegisterUseCases.md)

#### Defined in

[api/src/usecases/auth/register.usecases.ts:11](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/register.usecases.ts#L11)

## Properties

### bcryptService

• `Private` `Readonly` **bcryptService**: [`IBcryptService`](../interfaces/domain_adapters_bcrypt_interface.IBcryptService.md)

The bcrypt service.

#### Defined in

[api/src/usecases/auth/register.usecases.ts:13](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/register.usecases.ts#L13)

---

### userRepository

• `Private` `Readonly` **userRepository**: [`UserRepository`](../interfaces/domain_repositories_userRepository_interface.UserRepository.md)

The user repository.

#### Defined in

[api/src/usecases/auth/register.usecases.ts:12](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/register.usecases.ts#L12)

## Methods

### checkPassword

▸ **checkPassword**(`params`): `Promise`\<`string`\>

Checks if the provided password matches the confirmed password.

#### Parameters

| Name                     | Type     | Description                                              |
| :----------------------- | :------- | :------------------------------------------------------- |
| `params`                 | `Object` | The parameters for checking the password.                |
| `params.confirmPassword` | `string` | The confirmed password to be compared with the password. |
| `params.password`        | `string` | The password to be checked.                              |

#### Returns

`Promise`\<`string`\>

- A promise that resolves to a string if the passwords do not match, or null if they match.

#### Defined in

[api/src/usecases/auth/register.usecases.ts:50](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/register.usecases.ts#L50)

---

### registerUser

▸ **registerUser**(`params`): `Promise`\<[`User`](domain_model_user.User.md)\>

Registers a new user.

#### Parameters

| Name              | Type     | Description                  |
| :---------------- | :------- | :--------------------------- |
| `params`          | `Object` | The registration parameters. |
| `params.email`    | `string` | The email of the user.       |
| `params.password` | `string` | The password of the user.    |
| `params.username` | `string` | -                            |

#### Returns

`Promise`\<[`User`](domain_model_user.User.md)\>

- The newly registered user.

#### Defined in

[api/src/usecases/auth/register.usecases.ts:70](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/register.usecases.ts#L70)

---

### userShouldNotExist

▸ **userShouldNotExist**(`«destructured»`): `Promise`\<`string`\>

Checks if a user with the given email and username already exists.

#### Parameters

| Name             | Type     |
| :--------------- | :------- |
| `«destructured»` | `Object` |
| › `email`        | `string` |
| › `username`     | `string` |

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string indicating if the user exists.

#### Defined in

[api/src/usecases/auth/register.usecases.ts:22](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/register.usecases.ts#L22)
