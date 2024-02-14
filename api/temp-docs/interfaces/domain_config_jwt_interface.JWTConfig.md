[api](../README.md) / [Exports](../modules.md) / [domain/config/jwt.interface](../modules/domain_config_jwt_interface.md) / JWTConfig

# Interface: JWTConfig

[domain/config/jwt.interface](../modules/domain_config_jwt_interface.md).JWTConfig

Represents the configuration for JWT (JSON Web Token).

## Implemented by

- [`EnvironmentConfigService`](../classes/infrastructure_config_environment_environment_config_service.EnvironmentConfigService.md)

## Table of contents

### Methods

- [getJwtExpirationTime](domain_config_jwt_interface.JWTConfig.md#getjwtexpirationtime)
- [getJwtRefreshExpirationTime](domain_config_jwt_interface.JWTConfig.md#getjwtrefreshexpirationtime)
- [getJwtRefreshSecret](domain_config_jwt_interface.JWTConfig.md#getjwtrefreshsecret)
- [getJwtSecret](domain_config_jwt_interface.JWTConfig.md#getjwtsecret)

## Methods

### getJwtExpirationTime

▸ **getJwtExpirationTime**(): `string`

Retrieves the JWT expiration time.

#### Returns

`string`

The JWT expiration time.

#### Defined in

[api/src/domain/config/jwt.interface.ts:15](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/config/jwt.interface.ts#L15)

---

### getJwtRefreshExpirationTime

▸ **getJwtRefreshExpirationTime**(): `string`

Retrieves the JWT refresh expiration time.

#### Returns

`string`

The JWT refresh expiration time.

#### Defined in

[api/src/domain/config/jwt.interface.ts:27](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/config/jwt.interface.ts#L27)

---

### getJwtRefreshSecret

▸ **getJwtRefreshSecret**(): `string`

Retrieves the JWT refresh secret.

#### Returns

`string`

The JWT refresh secret.

#### Defined in

[api/src/domain/config/jwt.interface.ts:21](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/config/jwt.interface.ts#L21)

---

### getJwtSecret

▸ **getJwtSecret**(): `string`

Retrieves the JWT secret.

#### Returns

`string`

The JWT secret.

#### Defined in

[api/src/domain/config/jwt.interface.ts:9](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/config/jwt.interface.ts#L9)
