[api](../README.md) / [Exports](../modules.md) / [infrastructure/schemas/user.schema](../modules/infrastructure_schemas_user_schema.md) / User

# Class: User

[infrastructure/schemas/user.schema](../modules/infrastructure_schemas_user_schema.md).User

Represents a User schema in MongoDB.

## Implements

- `Omit`\<[`UserModel`](domain_model_user.UserModel.md), `"id"` \| `"refreshToken"` \| `"accessToken"`\>

## Table of contents

### Constructors

- [constructor](infrastructure_schemas_user_schema.User.md#constructor)

### Properties

- [\_id](infrastructure_schemas_user_schema.User.md#_id)
- [createDate](infrastructure_schemas_user_schema.User.md#createdate)
- [email](infrastructure_schemas_user_schema.User.md#email)
- [hashRefreshToken](infrastructure_schemas_user_schema.User.md#hashrefreshtoken)
- [lastLogin](infrastructure_schemas_user_schema.User.md#lastlogin)
- [password](infrastructure_schemas_user_schema.User.md#password)
- [updatedDate](infrastructure_schemas_user_schema.User.md#updateddate)
- [username](infrastructure_schemas_user_schema.User.md#username)

## Constructors

### constructor

• **new User**(): [`User`](infrastructure_schemas_user_schema.User.md)

#### Returns

[`User`](infrastructure_schemas_user_schema.User.md)

## Properties

### \_id

• **\_id**: `ObjectId`

The id of the user.

#### Defined in

[api/src/infrastructure/schemas/user.schema.ts:20](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/schemas/user.schema.ts#L20)

---

### createDate

• **createDate**: `Date`

The date the user was created.

#### Implementation of

Omit.createDate

#### Defined in

[api/src/infrastructure/schemas/user.schema.ts:52](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/schemas/user.schema.ts#L52)

---

### email

• **email**: `string`

The email of the user.

#### Implementation of

Omit.email

#### Defined in

[api/src/infrastructure/schemas/user.schema.ts:29](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/schemas/user.schema.ts#L29)

---

### hashRefreshToken

• **hashRefreshToken**: `string`

The refresh token hash of the user.

#### Implementation of

Omit.hashRefreshToken

#### Defined in

[api/src/infrastructure/schemas/user.schema.ts:46](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/schemas/user.schema.ts#L46)

---

### lastLogin

• **lastLogin**: `Date`

The date the user last logged in.

#### Implementation of

Omit.lastLogin

#### Defined in

[api/src/infrastructure/schemas/user.schema.ts:58](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/schemas/user.schema.ts#L58)

---

### password

• **password**: `string`

The password of the user.

#### Implementation of

Omit.password

#### Defined in

[api/src/infrastructure/schemas/user.schema.ts:40](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/schemas/user.schema.ts#L40)

---

### updatedDate

• **updatedDate**: `Date`

The date the user was last updated.

#### Implementation of

Omit.updatedDate

#### Defined in

[api/src/infrastructure/schemas/user.schema.ts:64](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/schemas/user.schema.ts#L64)

---

### username

• **username**: `string`

The username of the user.

#### Implementation of

Omit.username

#### Defined in

[api/src/infrastructure/schemas/user.schema.ts:34](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/schemas/user.schema.ts#L34)
