[api](../README.md) / [Exports](../modules.md) / [usecases/auth/login.usecases](../modules/usecases_auth_login_usecases.md) / LoginUseCases

# Class: LoginUseCases

[usecases/auth/login.usecases](../modules/usecases_auth_login_usecases.md).LoginUseCases

Represents the use cases for user login functionality.

## Table of contents

### Constructors

- [constructor](usecases_auth_login_usecases.LoginUseCases.md#constructor)

### Properties

- [bcryptService](usecases_auth_login_usecases.LoginUseCases.md#bcryptservice)
- [jwtConfig](usecases_auth_login_usecases.LoginUseCases.md#jwtconfig)
- [jwtTokenService](usecases_auth_login_usecases.LoginUseCases.md#jwttokenservice)
- [logger](usecases_auth_login_usecases.LoginUseCases.md#logger)
- [userRepository](usecases_auth_login_usecases.LoginUseCases.md#userrepository)

### Methods

- [getCookieWithJwtRefreshToken](usecases_auth_login_usecases.LoginUseCases.md#getcookiewithjwtrefreshtoken)
- [getCookieWithJwtToken](usecases_auth_login_usecases.LoginUseCases.md#getcookiewithjwttoken)
- [getUserIfRefreshTokenMatches](usecases_auth_login_usecases.LoginUseCases.md#getuserifrefreshtokenmatches)
- [setCurrentRefreshToken](usecases_auth_login_usecases.LoginUseCases.md#setcurrentrefreshtoken)
- [updateLoginTime](usecases_auth_login_usecases.LoginUseCases.md#updatelogintime)
- [validateUserForJWTStragtegy](usecases_auth_login_usecases.LoginUseCases.md#validateuserforjwtstragtegy)
- [validateUserForLocalStragtegy](usecases_auth_login_usecases.LoginUseCases.md#validateuserforlocalstragtegy)

## Constructors

### constructor

• **new LoginUseCases**(`logger`, `jwtTokenService`, `jwtConfig`, `userRepository`, `bcryptService`): [`LoginUseCases`](usecases_auth_login_usecases.LoginUseCases.md)

Constructs a new instance of the LoginUseCases class.

#### Parameters

| Name              | Type                                                                                             | Description            |
| :---------------- | :----------------------------------------------------------------------------------------------- | :--------------------- |
| `logger`          | [`ILogger`](../interfaces/domain_logger_logger_interface.ILogger.md)                             | The logger instance.   |
| `jwtTokenService` | [`IJwtService`](../interfaces/domain_adapters_jwt_interface.IJwtService.md)                      | The JWT token service. |
| `jwtConfig`       | [`JWTConfig`](../interfaces/domain_config_jwt_interface.JWTConfig.md)                            | The JWT configuration. |
| `userRepository`  | [`UserRepository`](../interfaces/domain_repositories_userRepository_interface.UserRepository.md) | The user repository.   |
| `bcryptService`   | [`IBcryptService`](../interfaces/domain_adapters_bcrypt_interface.IBcryptService.md)             | The bcrypt service.    |

#### Returns

[`LoginUseCases`](usecases_auth_login_usecases.LoginUseCases.md)

#### Defined in

[api/src/usecases/auth/login.usecases.ts:22](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L22)

## Properties

### bcryptService

• `Private` `Readonly` **bcryptService**: [`IBcryptService`](../interfaces/domain_adapters_bcrypt_interface.IBcryptService.md)

The bcrypt service.

#### Defined in

[api/src/usecases/auth/login.usecases.ts:27](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L27)

---

### jwtConfig

• `Private` `Readonly` **jwtConfig**: [`JWTConfig`](../interfaces/domain_config_jwt_interface.JWTConfig.md)

The JWT configuration.

#### Defined in

[api/src/usecases/auth/login.usecases.ts:25](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L25)

---

### jwtTokenService

• `Private` `Readonly` **jwtTokenService**: [`IJwtService`](../interfaces/domain_adapters_jwt_interface.IJwtService.md)

The JWT token service.

#### Defined in

[api/src/usecases/auth/login.usecases.ts:24](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L24)

---

### logger

• `Private` `Readonly` **logger**: [`ILogger`](../interfaces/domain_logger_logger_interface.ILogger.md)

The logger instance.

#### Defined in

[api/src/usecases/auth/login.usecases.ts:23](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L23)

---

### userRepository

• `Private` `Readonly` **userRepository**: [`UserRepository`](../interfaces/domain_repositories_userRepository_interface.UserRepository.md)

The user repository.

#### Defined in

[api/src/usecases/auth/login.usecases.ts:26](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L26)

## Methods

### getCookieWithJwtRefreshToken

▸ **getCookieWithJwtRefreshToken**(`username`): `Promise`\<`string`\>

Retrieves a cookie with a JWT refresh token for the specified username.

#### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `username` | `string` | The username of the user. |

#### Returns

`Promise`\<`string`\>

The cookie containing the JWT refresh token.

#### Defined in

[api/src/usecases/auth/login.usecases.ts:52](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L52)

---

### getCookieWithJwtToken

▸ **getCookieWithJwtToken**(`username`): `Promise`\<`string`\>

Generates a cookie with a JWT token for the specified username.

#### Parameters

| Name       | Type     | Description                                        |
| :--------- | :------- | :------------------------------------------------- |
| `username` | `string` | The username for which the JWT token is generated. |

#### Returns

`Promise`\<`string`\>

A string representing the generated cookie with the JWT token.

#### Defined in

[api/src/usecases/auth/login.usecases.ts:35](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L35)

---

### getUserIfRefreshTokenMatches

▸ **getUserIfRefreshTokenMatches**(`refreshToken`, `username`): `Promise`\<[`UserModel`](domain_model_user.UserModel.md)\>

Retrieves a user if the refresh token matches the stored hashed refresh token.

#### Parameters

| Name           | Type     | Description                   |
| :------------- | :------- | :---------------------------- |
| `refreshToken` | `string` | The refresh token to compare. |
| `username`     | `string` | The username of the user.     |

#### Returns

`Promise`\<[`UserModel`](domain_model_user.UserModel.md)\>

The user object if the refresh token matches, otherwise null.

#### Defined in

[api/src/usecases/auth/login.usecases.ts:131](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L131)

---

### setCurrentRefreshToken

▸ **setCurrentRefreshToken**(`refreshToken`, `username`): `Promise`\<`void`\>

Sets the current refresh token for a user.

#### Parameters

| Name           | Type     | Description               |
| :------------- | :------- | :------------------------ |
| `refreshToken` | `string` | The new refresh token.    |
| `username`     | `string` | The username of the user. |

#### Returns

`Promise`\<`void`\>

Promise<void>

#### Defined in

[api/src/usecases/auth/login.usecases.ts:116](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L116)

---

### updateLoginTime

▸ **updateLoginTime**(`username`): `Promise`\<`void`\>

Updates the last login time for a user.

#### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `username` | `string` | The username of the user. |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the last login time is updated.

#### Defined in

[api/src/usecases/auth/login.usecases.ts:106](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L106)

---

### validateUserForJWTStragtegy

▸ **validateUserForJWTStragtegy**(`username`): `Promise`\<[`UserModel`](domain_model_user.UserModel.md)\>

Validates a user for JWT strategy.

#### Parameters

| Name       | Type     | Description                           |
| :--------- | :------- | :------------------------------------ |
| `username` | `string` | The username of the user to validate. |

#### Returns

`Promise`\<[`UserModel`](domain_model_user.UserModel.md)\>

The validated user or null if the user does not exist.

#### Defined in

[api/src/usecases/auth/login.usecases.ts:93](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L93)

---

### validateUserForLocalStragtegy

▸ **validateUserForLocalStragtegy**(`username`, `pass`): `Promise`\<\{ `createDate`: `Date` ; `email`: `string` ; `hashRefreshToken`: `string` ; `id`: `string` ; `lastLogin`: `Date` ; `updatedDate`: `Date` ; `username`: `string` }\>

Validates a user for local strategy authentication.

#### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `username` | `string` | The username of the user. |
| `pass`     | `string` | The password of the user. |

#### Returns

`Promise`\<\{ `createDate`: `Date` ; `email`: `string` ; `hashRefreshToken`: `string` ; `id`: `string` ; `lastLogin`: `Date` ; `updatedDate`: `Date` ; `username`: `string` }\>

The user object if validation is successful, otherwise null.

#### Defined in

[api/src/usecases/auth/login.usecases.ts:73](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/usecases/auth/login.usecases.ts#L73)
