[api](../README.md) / [Exports](../modules.md) / [infrastructure/services/bcrypt/bcrypt.service](../modules/infrastructure_services_bcrypt_bcrypt_service.md) / BcryptService

# Class: BcryptService

[infrastructure/services/bcrypt/bcrypt.service](../modules/infrastructure_services_bcrypt_bcrypt_service.md).BcryptService

Interface for the Bcrypt service.

## Implements

- [`IBcryptService`](../interfaces/domain_adapters_bcrypt_interface.IBcryptService.md)

## Table of contents

### Constructors

- [constructor](infrastructure_services_bcrypt_bcrypt_service.BcryptService.md#constructor)

### Properties

- [rounds](infrastructure_services_bcrypt_bcrypt_service.BcryptService.md#rounds)

### Methods

- [compare](infrastructure_services_bcrypt_bcrypt_service.BcryptService.md#compare)
- [hash](infrastructure_services_bcrypt_bcrypt_service.BcryptService.md#hash)

## Constructors

### constructor

• **new BcryptService**(): [`BcryptService`](infrastructure_services_bcrypt_bcrypt_service.BcryptService.md)

#### Returns

[`BcryptService`](infrastructure_services_bcrypt_bcrypt_service.BcryptService.md)

## Properties

### rounds

• `Private` `Readonly` **rounds**: `10`

#### Defined in

[api/src/infrastructure/services/bcrypt/bcrypt.service.ts:10](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/services/bcrypt/bcrypt.service.ts#L10)

## Methods

### compare

▸ **compare**(`password`, `hashPassword`): `Promise`\<`boolean`\>

Compares a plain text password with a hashed password.

#### Parameters

| Name           | Type     | Description                             |
| :------------- | :------- | :-------------------------------------- |
| `password`     | `string` | The plain text password to compare.     |
| `hashPassword` | `string` | The hashed password to compare against. |

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to a boolean indicating whether the passwords match.

#### Implementation of

[IBcryptService](../interfaces/domain_adapters_bcrypt_interface.IBcryptService.md).[compare](../interfaces/domain_adapters_bcrypt_interface.IBcryptService.md#compare)

#### Defined in

[api/src/infrastructure/services/bcrypt/bcrypt.service.ts:27](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/services/bcrypt/bcrypt.service.ts#L27)

---

### hash

▸ **hash**(`hashString`): `Promise`\<`string`\>

Hashes a string using bcrypt.

#### Parameters

| Name         | Type     | Description              |
| :----------- | :------- | :----------------------- |
| `hashString` | `string` | The string to be hashed. |

#### Returns

`Promise`\<`string`\>

A promise that resolves to the hashed string.

#### Implementation of

[IBcryptService](../interfaces/domain_adapters_bcrypt_interface.IBcryptService.md).[hash](../interfaces/domain_adapters_bcrypt_interface.IBcryptService.md#hash)

#### Defined in

[api/src/infrastructure/services/bcrypt/bcrypt.service.ts:17](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/services/bcrypt/bcrypt.service.ts#L17)
