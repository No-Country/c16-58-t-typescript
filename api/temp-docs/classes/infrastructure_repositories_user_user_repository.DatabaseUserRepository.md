[api](../README.md) / [Exports](../modules.md) / [infrastructure/repositories/user/user.repository](../modules/infrastructure_repositories_user_user_repository.md) / DatabaseUserRepository

# Class: DatabaseUserRepository

[infrastructure/repositories/user/user.repository](../modules/infrastructure_repositories_user_user_repository.md).DatabaseUserRepository

DatabaseUserRepository class that implements the UserRepository interface.
This class provides methods to interact with the user collection in the MongoDB database.

## Implements

- [`UserRepository`](../interfaces/domain_repositories_userRepository_interface.UserRepository.md)

## Table of contents

### Constructors

- [constructor](infrastructure_repositories_user_user_repository.DatabaseUserRepository.md#constructor)

### Properties

- [userSchemaRepository](infrastructure_repositories_user_user_repository.DatabaseUserRepository.md#userschemarepository)

### Methods

- [createUser](infrastructure_repositories_user_user_repository.DatabaseUserRepository.md#createuser)
- [getUserByEmail](infrastructure_repositories_user_user_repository.DatabaseUserRepository.md#getuserbyemail)
- [getUserByUsername](infrastructure_repositories_user_user_repository.DatabaseUserRepository.md#getuserbyusername)
- [toUser](infrastructure_repositories_user_user_repository.DatabaseUserRepository.md#touser)
- [toUserEntity](infrastructure_repositories_user_user_repository.DatabaseUserRepository.md#touserentity)
- [updateLastLogin](infrastructure_repositories_user_user_repository.DatabaseUserRepository.md#updatelastlogin)
- [updateRefreshToken](infrastructure_repositories_user_user_repository.DatabaseUserRepository.md#updaterefreshtoken)

## Constructors

### constructor

• **new DatabaseUserRepository**(`userSchemaRepository`): [`DatabaseUserRepository`](infrastructure_repositories_user_user_repository.DatabaseUserRepository.md)

#### Parameters

| Name                   | Type                                                                                                                                                                                                                                                                |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `userSchemaRepository` | `Model`\<[`User`](infrastructure_schemas_user_schema.User.md), {}, {}, {}, `Document`\<`unknown`, {}, [`User`](infrastructure_schemas_user_schema.User.md)\> & [`User`](infrastructure_schemas_user_schema.User.md) & `Required`\<\{ `_id`: `ObjectId` }\>, `any`\> |

#### Returns

[`DatabaseUserRepository`](infrastructure_repositories_user_user_repository.DatabaseUserRepository.md)

#### Defined in

[api/src/infrastructure/repositories/user/user.repository.ts:14](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/repositories/user/user.repository.ts#L14)

## Properties

### userSchemaRepository

• `Private` **userSchemaRepository**: `Model`\<[`User`](infrastructure_schemas_user_schema.User.md), {}, {}, {}, `Document`\<`unknown`, {}, [`User`](infrastructure_schemas_user_schema.User.md)\> & [`User`](infrastructure_schemas_user_schema.User.md) & `Required`\<\{ `_id`: `ObjectId` }\>, `any`\>

#### Defined in

[api/src/infrastructure/repositories/user/user.repository.ts:16](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/repositories/user/user.repository.ts#L16)

## Methods

### createUser

▸ **createUser**(`email`, `username`, `password`): `Promise`\<[`UserModel`](domain_model_user.UserModel.md)\>

Creates a new user with the given username and password.

#### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `email`    | `string` | -                         |
| `username` | `string` | The username of the user. |
| `password` | `string` | The password of the user. |

#### Returns

`Promise`\<[`UserModel`](domain_model_user.UserModel.md)\>

A Promise that resolves to the created UserModel.

#### Implementation of

[UserRepository](../interfaces/domain_repositories_userRepository_interface.UserRepository.md).[createUser](../interfaces/domain_repositories_userRepository_interface.UserRepository.md#createuser)

#### Defined in

[api/src/infrastructure/repositories/user/user.repository.ts:25](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/repositories/user/user.repository.ts#L25)

---

### getUserByEmail

▸ **getUserByEmail**(`email`): `Promise`\<[`UserModel`](domain_model_user.UserModel.md)\>

Retrieves a user by their email address.

#### Parameters

| Name    | Type     | Description                    |
| :------ | :------- | :----------------------------- |
| `email` | `string` | The email address of the user. |

#### Returns

`Promise`\<[`UserModel`](domain_model_user.UserModel.md)\>

A Promise that resolves to a UserModel if a user with the specified email is found, or null otherwise.

#### Implementation of

[UserRepository](../interfaces/domain_repositories_userRepository_interface.UserRepository.md).[getUserByEmail](../interfaces/domain_repositories_userRepository_interface.UserRepository.md#getuserbyemail)

#### Defined in

[api/src/infrastructure/repositories/user/user.repository.ts:76](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/repositories/user/user.repository.ts#L76)

---

### getUserByUsername

▸ **getUserByUsername**(`username`): `Promise`\<[`UserModel`](domain_model_user.UserModel.md)\>

Retrieves a user by their username.

#### Parameters

| Name       | Type     | Description                           |
| :--------- | :------- | :------------------------------------ |
| `username` | `string` | The username of the user to retrieve. |

#### Returns

`Promise`\<[`UserModel`](domain_model_user.UserModel.md)\>

A Promise that resolves to the UserModel if found, or null if not found.

#### Implementation of

[UserRepository](../interfaces/domain_repositories_userRepository_interface.UserRepository.md).[getUserByUsername](../interfaces/domain_repositories_userRepository_interface.UserRepository.md#getuserbyusername)

#### Defined in

[api/src/infrastructure/repositories/user/user.repository.ts:88](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/repositories/user/user.repository.ts#L88)

---

### toUser

▸ **toUser**(`userEntity`): [`UserModel`](domain_model_user.UserModel.md)

Converts a User entity to a UserModel.

#### Parameters

| Name         | Type                                                 | Description                 |
| :----------- | :--------------------------------------------------- | :-------------------------- |
| `userEntity` | [`User`](infrastructure_schemas_user_schema.User.md) | The User entity to convert. |

#### Returns

[`UserModel`](domain_model_user.UserModel.md)

The converted UserModel.

#### Defined in

[api/src/infrastructure/repositories/user/user.repository.ts:100](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/repositories/user/user.repository.ts#L100)

---

### toUserEntity

▸ **toUserEntity**(`adminUser`): [`User`](infrastructure_schemas_user_schema.User.md)

Converts an admin user model to a user entity.

#### Parameters

| Name        | Type                                          | Description                      |
| :---------- | :-------------------------------------------- | :------------------------------- |
| `adminUser` | [`UserModel`](domain_model_user.UserModel.md) | The admin user model to convert. |

#### Returns

[`User`](infrastructure_schemas_user_schema.User.md)

The converted user entity.

#### Defined in

[api/src/infrastructure/repositories/user/user.repository.ts:121](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/repositories/user/user.repository.ts#L121)

---

### updateLastLogin

▸ **updateLastLogin**(`username`): `Promise`\<`void`\>

Updates the last login date for a user.

#### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `username` | `string` | The username of the user. |

#### Returns

`Promise`\<`void`\>

A promise that resolves to void.

#### Implementation of

[UserRepository](../interfaces/domain_repositories_userRepository_interface.UserRepository.md).[updateLastLogin](../interfaces/domain_repositories_userRepository_interface.UserRepository.md#updatelastlogin)

#### Defined in

[api/src/infrastructure/repositories/user/user.repository.ts:65](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/repositories/user/user.repository.ts#L65)

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

A promise that resolves when the refresh token is updated.

#### Implementation of

[UserRepository](../interfaces/domain_repositories_userRepository_interface.UserRepository.md).[updateRefreshToken](../interfaces/domain_repositories_userRepository_interface.UserRepository.md#updaterefreshtoken)

#### Defined in

[api/src/infrastructure/repositories/user/user.repository.ts:50](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/repositories/user/user.repository.ts#L50)
