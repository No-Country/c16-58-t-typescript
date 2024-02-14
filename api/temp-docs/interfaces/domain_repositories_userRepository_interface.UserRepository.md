[api](../README.md) / [Exports](../modules.md) / [domain/repositories/userRepository.interface](../modules/domain_repositories_userRepository_interface.md) / UserRepository

# Interface: UserRepository

[domain/repositories/userRepository.interface](../modules/domain_repositories_userRepository_interface.md).UserRepository

Represents a repository for managing user data.

## Implemented by

- [`DatabaseUserRepository`](../classes/infrastructure_repositories_user_user_repository.DatabaseUserRepository.md)

## Table of contents

### Methods

- [createUser](domain_repositories_userRepository_interface.UserRepository.md#createuser)
- [getUserByEmail](domain_repositories_userRepository_interface.UserRepository.md#getuserbyemail)
- [getUserByUsername](domain_repositories_userRepository_interface.UserRepository.md#getuserbyusername)
- [updateLastLogin](domain_repositories_userRepository_interface.UserRepository.md#updatelastlogin)
- [updateRefreshToken](domain_repositories_userRepository_interface.UserRepository.md#updaterefreshtoken)

## Methods

### createUser

▸ **createUser**(`email`, `username`, `password`): `Promise`\<[`UserModel`](../classes/domain_model_user.UserModel.md)\>

Creates a new user with the specified email, username, and password.

#### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `email`    | `string` | The email of the user.    |
| `username` | `string` | The username of the user. |
| `password` | `string` | The password of the user. |

#### Returns

`Promise`\<[`UserModel`](../classes/domain_model_user.UserModel.md)\>

A promise that resolves to the created user model.

#### Defined in

[api/src/domain/repositories/userRepository.interface.ts:18](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/repositories/userRepository.interface.ts#L18)

---

### getUserByEmail

▸ **getUserByEmail**(`email`): `Promise`\<[`UserModel`](../classes/domain_model_user.UserModel.md)\>

Retrieves a user by their email.

#### Parameters

| Name    | Type     | Description            |
| :------ | :------- | :--------------------- |
| `email` | `string` | The email of the user. |

#### Returns

`Promise`\<[`UserModel`](../classes/domain_model_user.UserModel.md)\>

A promise that resolves to the user model.

#### Defined in

[api/src/domain/repositories/userRepository.interface.ts:51](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/repositories/userRepository.interface.ts#L51)

---

### getUserByUsername

▸ **getUserByUsername**(`username`): `Promise`\<[`UserModel`](../classes/domain_model_user.UserModel.md)\>

Retrieves a user by their username.

#### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `username` | `string` | The username of the user. |

#### Returns

`Promise`\<[`UserModel`](../classes/domain_model_user.UserModel.md)\>

A promise that resolves to the user model.

#### Defined in

[api/src/domain/repositories/userRepository.interface.ts:29](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/repositories/userRepository.interface.ts#L29)

---

### updateLastLogin

▸ **updateLastLogin**(`username`): `Promise`\<`void`\>

Updates the last login timestamp for a user.

#### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `username` | `string` | The username of the user. |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the update is complete.

#### Defined in

[api/src/domain/repositories/userRepository.interface.ts:36](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/repositories/userRepository.interface.ts#L36)

---

### updateRefreshToken

▸ **updateRefreshToken**(`username`, `refreshToken`): `Promise`\<`void`\>

Updates the refresh token for a user.

#### Parameters

| Name           | Type     | Description               |
| :------------- | :------- | :------------------------ |
| `username`     | `string` | The username of the user. |
| `refreshToken` | `string` | The new refresh token.    |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the update is complete.

#### Defined in

[api/src/domain/repositories/userRepository.interface.ts:44](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/repositories/userRepository.interface.ts#L44)
