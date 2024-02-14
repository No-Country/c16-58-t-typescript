[api](../README.md) / [Exports](../modules.md) / [domain/adapters/jwt.interface](../modules/domain_adapters_jwt_interface.md) / IJwtService

# Interface: IJwtService

[domain/adapters/jwt.interface](../modules/domain_adapters_jwt_interface.md).IJwtService

Interface for JWT service.

## Implemented by

- [`JwtTokenService`](../classes/infrastructure_services_jwt_jwt_service.JwtTokenService.md)

## Table of contents

### Methods

- [checkToken](domain_adapters_jwt_interface.IJwtService.md#checktoken)
- [createToken](domain_adapters_jwt_interface.IJwtService.md#createtoken)

## Methods

### checkToken

▸ **checkToken**(`token`): `Promise`\<`any`\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `token` | `string` |

#### Returns

`Promise`\<`any`\>

#### Defined in

[api/src/domain/adapters/jwt.interface.ts:13](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/adapters/jwt.interface.ts#L13)

---

### createToken

▸ **createToken**(`payload`, `secret`, `expiresIn`): `string`

#### Parameters

| Name        | Type                                                                        |
| :---------- | :-------------------------------------------------------------------------- |
| `payload`   | [`IJwtServicePayload`](domain_adapters_jwt_interface.IJwtServicePayload.md) |
| `secret`    | `string`                                                                    |
| `expiresIn` | `string`                                                                    |

#### Returns

`string`

#### Defined in

[api/src/domain/adapters/jwt.interface.ts:14](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/adapters/jwt.interface.ts#L14)
