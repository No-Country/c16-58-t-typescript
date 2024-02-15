[api](../README.md) / [Exports](../modules.md) / [infrastructure/config/environment/environment-config.service](../modules/infrastructure_config_environment_environment_config_service.md) / EnvironmentConfigService

# Class: EnvironmentConfigService

[infrastructure/config/environment/environment-config.service](../modules/infrastructure_config_environment_environment_config_service.md).EnvironmentConfigService

Service that provides environment configuration values for MongoDB and JWT.

## Implements

- [`MongoDbConfig`](../interfaces/domain_config_mongo_interface.MongoDbConfig.md)
- [`JWTConfig`](../interfaces/domain_config_jwt_interface.JWTConfig.md)

## Table of contents

### Constructors

- [constructor](infrastructure_config_environment_environment_config_service.EnvironmentConfigService.md#constructor)

### Properties

- [configService](infrastructure_config_environment_environment_config_service.EnvironmentConfigService.md#configservice)

### Methods

- [getJwtExpirationTime](infrastructure_config_environment_environment_config_service.EnvironmentConfigService.md#getjwtexpirationtime)
- [getJwtRefreshExpirationTime](infrastructure_config_environment_environment_config_service.EnvironmentConfigService.md#getjwtrefreshexpirationtime)
- [getJwtRefreshSecret](infrastructure_config_environment_environment_config_service.EnvironmentConfigService.md#getjwtrefreshsecret)
- [getJwtSecret](infrastructure_config_environment_environment_config_service.EnvironmentConfigService.md#getjwtsecret)
- [getMongoDbPassword](infrastructure_config_environment_environment_config_service.EnvironmentConfigService.md#getmongodbpassword)
- [getMongoDbUri](infrastructure_config_environment_environment_config_service.EnvironmentConfigService.md#getmongodburi)
- [getMongoDbUsername](infrastructure_config_environment_environment_config_service.EnvironmentConfigService.md#getmongodbusername)

## Constructors

### constructor

• **new EnvironmentConfigService**(`configService`): [`EnvironmentConfigService`](infrastructure_config_environment_environment_config_service.EnvironmentConfigService.md)

#### Parameters

| Name            | Type                                                        |
| :-------------- | :---------------------------------------------------------- |
| `configService` | `ConfigService`\<`Record`\<`string`, `unknown`\>, `false`\> |

#### Returns

[`EnvironmentConfigService`](infrastructure_config_environment_environment_config_service.EnvironmentConfigService.md)

#### Defined in

[api/src/infrastructure/config/environment/environment-config.service.ts:11](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.service.ts#L11)

## Properties

### configService

• `Private` **configService**: `ConfigService`\<`Record`\<`string`, `unknown`\>, `false`\>

#### Defined in

[api/src/infrastructure/config/environment/environment-config.service.ts:11](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.service.ts#L11)

## Methods

### getJwtExpirationTime

▸ **getJwtExpirationTime**(): `string`

Retrieves the JWT expiration time from the configuration.

#### Returns

`string`

The JWT expiration time.

#### Implementation of

[JWTConfig](../interfaces/domain_config_jwt_interface.JWTConfig.md).[getJwtExpirationTime](../interfaces/domain_config_jwt_interface.JWTConfig.md#getjwtexpirationtime)

#### Defined in

[api/src/infrastructure/config/environment/environment-config.service.ts:50](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.service.ts#L50)

---

### getJwtRefreshExpirationTime

▸ **getJwtRefreshExpirationTime**(): `string`

Retrieves the JWT refresh token expiration time from the configuration.

#### Returns

`string`

The JWT refresh token expiration time.

#### Implementation of

[JWTConfig](../interfaces/domain_config_jwt_interface.JWTConfig.md).[getJwtRefreshExpirationTime](../interfaces/domain_config_jwt_interface.JWTConfig.md#getjwtrefreshexpirationtime)

#### Defined in

[api/src/infrastructure/config/environment/environment-config.service.ts:66](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.service.ts#L66)

---

### getJwtRefreshSecret

▸ **getJwtRefreshSecret**(): `string`

Retrieves the JWT refresh token secret from the configuration.

#### Returns

`string`

The JWT refresh token secret.

#### Implementation of

[JWTConfig](../interfaces/domain_config_jwt_interface.JWTConfig.md).[getJwtRefreshSecret](../interfaces/domain_config_jwt_interface.JWTConfig.md#getjwtrefreshsecret)

#### Defined in

[api/src/infrastructure/config/environment/environment-config.service.ts:58](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.service.ts#L58)

---

### getJwtSecret

▸ **getJwtSecret**(): `string`

Retrieves the JWT secret from the configuration.

#### Returns

`string`

The JWT secret.

#### Implementation of

[JWTConfig](../interfaces/domain_config_jwt_interface.JWTConfig.md).[getJwtSecret](../interfaces/domain_config_jwt_interface.JWTConfig.md#getjwtsecret)

#### Defined in

[api/src/infrastructure/config/environment/environment-config.service.ts:42](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.service.ts#L42)

---

### getMongoDbPassword

▸ **getMongoDbPassword**(): `string`

Retrieves the MongoDB password from the configuration service.

#### Returns

`string`

The MongoDB password as a string.

#### Implementation of

[MongoDbConfig](../interfaces/domain_config_mongo_interface.MongoDbConfig.md).[getMongoDbPassword](../interfaces/domain_config_mongo_interface.MongoDbConfig.md#getmongodbpassword)

#### Defined in

[api/src/infrastructure/config/environment/environment-config.service.ts:26](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.service.ts#L26)

---

### getMongoDbUri

▸ **getMongoDbUri**(): `string`

Retrieves the MongoDB URI from the configuration.

#### Returns

`string`

The MongoDB URI.

#### Implementation of

[MongoDbConfig](../interfaces/domain_config_mongo_interface.MongoDbConfig.md).[getMongoDbUri](../interfaces/domain_config_mongo_interface.MongoDbConfig.md#getmongodburi)

#### Defined in

[api/src/infrastructure/config/environment/environment-config.service.ts:17](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.service.ts#L17)

---

### getMongoDbUsername

▸ **getMongoDbUsername**(): `string`

Retrieves the MongoDB username from the configuration.

#### Returns

`string`

The MongoDB username.

#### Implementation of

[MongoDbConfig](../interfaces/domain_config_mongo_interface.MongoDbConfig.md).[getMongoDbUsername](../interfaces/domain_config_mongo_interface.MongoDbConfig.md#getmongodbusername)

#### Defined in

[api/src/infrastructure/config/environment/environment-config.service.ts:34](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.service.ts#L34)
