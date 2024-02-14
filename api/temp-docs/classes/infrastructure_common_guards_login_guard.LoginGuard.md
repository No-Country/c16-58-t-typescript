[api](../README.md) / [Exports](../modules.md) / [infrastructure/common/guards/login.guard](../modules/infrastructure_common_guards_login_guard.md) / LoginGuard

# Class: LoginGuard

[infrastructure/common/guards/login.guard](../modules/infrastructure_common_guards_login_guard.md).LoginGuard

## Hierarchy

- `IAuthGuard`

  ↳ **`LoginGuard`**

## Table of contents

### Constructors

- [constructor](infrastructure_common_guards_login_guard.LoginGuard.md#constructor)

### Properties

- [arguments](infrastructure_common_guards_login_guard.LoginGuard.md#arguments)
- [caller](infrastructure_common_guards_login_guard.LoginGuard.md#caller)
- [length](infrastructure_common_guards_login_guard.LoginGuard.md#length)
- [name](infrastructure_common_guards_login_guard.LoginGuard.md#name)

### Methods

- [canActivate](infrastructure_common_guards_login_guard.LoginGuard.md#canactivate)
- [getAuthenticateOptions](infrastructure_common_guards_login_guard.LoginGuard.md#getauthenticateoptions)
- [getRequest](infrastructure_common_guards_login_guard.LoginGuard.md#getrequest)
- [handleRequest](infrastructure_common_guards_login_guard.LoginGuard.md#handlerequest)
- [logIn](infrastructure_common_guards_login_guard.LoginGuard.md#login)
- [[hasInstance]](infrastructure_common_guards_login_guard.LoginGuard.md#[hasinstance])
- [apply](infrastructure_common_guards_login_guard.LoginGuard.md#apply)
- [bind](infrastructure_common_guards_login_guard.LoginGuard.md#bind)
- [call](infrastructure_common_guards_login_guard.LoginGuard.md#call)
- [toString](infrastructure_common_guards_login_guard.LoginGuard.md#tostring)

## Constructors

### constructor

• **new LoginGuard**(`...args`): [`LoginGuard`](infrastructure_common_guards_login_guard.LoginGuard.md)

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

[`LoginGuard`](infrastructure_common_guards_login_guard.LoginGuard.md)

#### Inherited from

AuthGuard('local').constructor

#### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/interfaces/type.interface.d.ts:2

## Properties

### arguments

▪ `Static` **arguments**: `any`

#### Inherited from

AuthGuard('local').arguments

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:305

---

### caller

▪ `Static` **caller**: `Function`

#### Inherited from

AuthGuard('local').caller

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:306

---

### length

▪ `Static` `Readonly` **length**: `number`

#### Inherited from

AuthGuard('local').length

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:302

---

### name

▪ `Static` `Readonly` **name**: `string`

Returns the name of the function. Function names are read-only and can not be changed.

#### Inherited from

AuthGuard('local').name

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.core.d.ts:95

## Methods

### canActivate

▸ **canActivate**(`context`): `boolean` \| `Promise`\<`boolean`\> \| `Observable`\<`boolean`\>

#### Parameters

| Name      | Type               | Description                                                                               |
| :-------- | :----------------- | :---------------------------------------------------------------------------------------- |
| `context` | `ExecutionContext` | Current execution context. Provides access to details about the current request pipeline. |

#### Returns

`boolean` \| `Promise`\<`boolean`\> \| `Observable`\<`boolean`\>

Value indicating whether or not the current request is allowed to
proceed.

#### Inherited from

AuthGuard('local').canActivate

#### Defined in

node_modules/.pnpm/@nestjs+common@10.3.3_class-transformer@0.5.1_class-validator@0.14.1_reflect-metadata@0.2.1_rxjs@7.8.1/node_modules/@nestjs/common/interfaces/features/can-activate.interface.d.ts:21

---

### getAuthenticateOptions

▸ **getAuthenticateOptions**(`context`): `IAuthModuleOptions`\<`any`\>

#### Parameters

| Name      | Type               |
| :-------- | :----------------- |
| `context` | `ExecutionContext` |

#### Returns

`IAuthModuleOptions`\<`any`\>

#### Inherited from

AuthGuard('local').getAuthenticateOptions

#### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/auth.guard.d.ts:9

---

### getRequest

▸ **getRequest**(`context`): `any`

#### Parameters

| Name      | Type               |
| :-------- | :----------------- |
| `context` | `ExecutionContext` |

#### Returns

`any`

#### Inherited from

AuthGuard('local').getRequest

#### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/auth.guard.d.ts:10

---

### handleRequest

▸ **handleRequest**\<`TUser`\>(`err`, `user`, `info`, `context`, `status?`): `TUser`

#### Type parameters

| Name    | Type  |
| :------ | :---- |
| `TUser` | `any` |

#### Parameters

| Name      | Type               |
| :-------- | :----------------- |
| `err`     | `any`              |
| `user`    | `any`              |
| `info`    | `any`              |
| `context` | `ExecutionContext` |
| `status?` | `any`              |

#### Returns

`TUser`

#### Inherited from

AuthGuard('local').handleRequest

#### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/auth.guard.d.ts:8

---

### logIn

▸ **logIn**\<`TRequest`\>(`request`): `Promise`\<`void`\>

#### Type parameters

| Name       | Type                     |
| :--------- | :----------------------- |
| `TRequest` | extends `Object` = `any` |

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `request` | `TRequest` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

AuthGuard('local').logIn

#### Defined in

node*modules/.pnpm/@nestjs+passport@10.0.3*@nestjs+common@10.3.3_passport@0.7.0/node_modules/@nestjs/passport/dist/auth.guard.d.ts:5

---

### [hasInstance]

▸ **[hasInstance]**(`value`): `boolean`

Determines whether the given value inherits from this function if this function was used
as a constructor function.

A constructor function can control which objects are recognized as its instances by
'instanceof' by overriding this method.

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

#### Returns

`boolean`

#### Inherited from

AuthGuard('local').[hasInstance]

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:164

---

### apply

▸ **apply**(`this`, `thisArg`, `argArray?`): `any`

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

#### Parameters

| Name        | Type       | Description                                      |
| :---------- | :--------- | :----------------------------------------------- |
| `this`      | `Function` | -                                                |
| `thisArg`   | `any`      | The object to be used as the this object.        |
| `argArray?` | `any`      | A set of arguments to be passed to the function. |

#### Returns

`any`

#### Inherited from

AuthGuard('local').apply

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:281

---

### bind

▸ **bind**(`this`, `thisArg`, `...argArray`): `any`

For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

#### Parameters

| Name          | Type       | Description                                                            |
| :------------ | :--------- | :--------------------------------------------------------------------- |
| `this`        | `Function` | -                                                                      |
| `thisArg`     | `any`      | An object to which the this keyword can refer inside the new function. |
| `...argArray` | `any`[]    | A list of arguments to be passed to the new function.                  |

#### Returns

`any`

#### Inherited from

AuthGuard('local').bind

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:296

---

### call

▸ **call**(`this`, `thisArg`, `...argArray`): `any`

Calls a method of an object, substituting another object for the current object.

#### Parameters

| Name          | Type       | Description                                     |
| :------------ | :--------- | :---------------------------------------------- |
| `this`        | `Function` | -                                               |
| `thisArg`     | `any`      | The object to be used as the current object.    |
| `...argArray` | `any`[]    | A list of arguments to be passed to the method. |

#### Returns

`any`

#### Inherited from

AuthGuard('local').call

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:288

---

### toString

▸ **toString**(): `string`

Returns a string representation of a function.

#### Returns

`string`

#### Inherited from

AuthGuard('local').toString

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts:299
