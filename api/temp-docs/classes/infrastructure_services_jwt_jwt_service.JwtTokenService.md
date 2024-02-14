[api](../README.md) / [Exports](../modules.md) / [infrastructure/services/jwt/jwt.service](../modules/infrastructure_services_jwt_jwt_service.md) / JwtTokenService

# Class: JwtTokenService

[infrastructure/services/jwt/jwt.service](../modules/infrastructure_services_jwt_jwt_service.md).JwtTokenService

Interface for JWT service.

## Implements

- [`IJwtService`](../interfaces/domain_adapters_jwt_interface.IJwtService.md)

## Table of contents

### Constructors

- [constructor](infrastructure_services_jwt_jwt_service.JwtTokenService.md#constructor)

### Properties

- [jwtService](infrastructure_services_jwt_jwt_service.JwtTokenService.md#jwtservice)

### Methods

- [checkToken](infrastructure_services_jwt_jwt_service.JwtTokenService.md#checktoken)
- [createToken](infrastructure_services_jwt_jwt_service.JwtTokenService.md#createtoken)

## Constructors

### constructor

• **new JwtTokenService**(`jwtService`): [`JwtTokenService`](infrastructure_services_jwt_jwt_service.JwtTokenService.md)

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `jwtService` | `JwtService` |

#### Returns

[`JwtTokenService`](infrastructure_services_jwt_jwt_service.JwtTokenService.md)

#### Defined in

[api/src/infrastructure/services/jwt/jwt.service.ts:13](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/services/jwt/jwt.service.ts#L13)

## Properties

### jwtService

• `Private` `Readonly` **jwtService**: `JwtService`

#### Defined in

[api/src/infrastructure/services/jwt/jwt.service.ts:13](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/services/jwt/jwt.service.ts#L13)

## Methods

### checkToken

▸ **checkToken**(`token`): `Promise`\<`any`\>

Checks the validity of a JWT token.

#### Parameters

| Name    | Type     | Description                  |
| :------ | :------- | :--------------------------- |
| `token` | `string` | The JWT token to be checked. |

#### Returns

`Promise`\<`any`\>

A Promise that resolves to the decoded token payload.

#### Implementation of

[IJwtService](../interfaces/domain_adapters_jwt_interface.IJwtService.md).[checkToken](../interfaces/domain_adapters_jwt_interface.IJwtService.md#checktoken)

#### Defined in

[api/src/infrastructure/services/jwt/jwt.service.ts:20](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/services/jwt/jwt.service.ts#L20)

---

### createToken

▸ **createToken**(`payload`, `secret`, `expiresIn`): `string`

Creates a JWT token with the given payload, secret, and expiration time.

#### Parameters

| Name        | Type                                                                                      | Description                            |
| :---------- | :---------------------------------------------------------------------------------------- | :------------------------------------- |
| `payload`   | [`IJwtServicePayload`](../interfaces/domain_adapters_jwt_interface.IJwtServicePayload.md) | The data to be included in the token.  |
| `secret`    | `string`                                                                                  | The secret key used to sign the token. |
| `expiresIn` | `string`                                                                                  | The expiration time for the token.     |

#### Returns

`string`

The generated JWT token.

#### Implementation of

[IJwtService](../interfaces/domain_adapters_jwt_interface.IJwtService.md).[createToken](../interfaces/domain_adapters_jwt_interface.IJwtService.md#createtoken)

#### Defined in

[api/src/infrastructure/services/jwt/jwt.service.ts:32](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/services/jwt/jwt.service.ts#L32)
