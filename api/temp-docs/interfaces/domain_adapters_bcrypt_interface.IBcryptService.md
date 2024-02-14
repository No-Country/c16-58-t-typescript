[api](../README.md) / [Exports](../modules.md) / [domain/adapters/bcrypt.interface](../modules/domain_adapters_bcrypt_interface.md) / IBcryptService

# Interface: IBcryptService

[domain/adapters/bcrypt.interface](../modules/domain_adapters_bcrypt_interface.md).IBcryptService

Interface for the Bcrypt service.

## Implemented by

- [`BcryptService`](../classes/infrastructure_services_bcrypt_bcrypt_service.BcryptService.md)

## Table of contents

### Methods

- [compare](domain_adapters_bcrypt_interface.IBcryptService.md#compare)
- [hash](domain_adapters_bcrypt_interface.IBcryptService.md#hash)

## Methods

### compare

▸ **compare**(`password`, `hashPassword`): `Promise`\<`boolean`\>

Compares a password with a hashed password.

#### Parameters

| Name           | Type     | Description                             |
| :------------- | :------- | :-------------------------------------- |
| `password`     | `string` | The password to be compared.            |
| `hashPassword` | `string` | The hashed password to compare against. |

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to a boolean indicating whether the password matches the hashed password.

#### Defined in

[api/src/domain/adapters/bcrypt.interface.ts:18](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/adapters/bcrypt.interface.ts#L18)

---

### hash

▸ **hash**(`hashString`): `Promise`\<`string`\>

Hashes a string.

#### Parameters

| Name         | Type     | Description              |
| :----------- | :------- | :----------------------- |
| `hashString` | `string` | The string to be hashed. |

#### Returns

`Promise`\<`string`\>

A promise that resolves to the hashed string.

#### Defined in

[api/src/domain/adapters/bcrypt.interface.ts:10](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/adapters/bcrypt.interface.ts#L10)
