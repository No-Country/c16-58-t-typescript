[api](../README.md) / [Exports](../modules.md) / [infrastructure/common/strategies/local.strategy](../modules/infrastructure_common_strategies_local_strategy.md) / LocalStrategy

# Class: LocalStrategy

[infrastructure/common/strategies/local.strategy](../modules/infrastructure_common_strategies_local_strategy.md).LocalStrategy

## Hierarchy

- `Strategy`\<`this`\>

  ↳ **`LocalStrategy`**

## Table of contents

### Constructors

- [constructor](infrastructure_common_strategies_local_strategy.LocalStrategy.md#constructor)

### Properties

- [exceptionService](infrastructure_common_strategies_local_strategy.LocalStrategy.md#exceptionservice)
- [logger](infrastructure_common_strategies_local_strategy.LocalStrategy.md#logger)
- [loginUsecaseProxy](infrastructure_common_strategies_local_strategy.LocalStrategy.md#loginusecaseproxy)
- [name](infrastructure_common_strategies_local_strategy.LocalStrategy.md#name)

### Methods

- [authenticate](infrastructure_common_strategies_local_strategy.LocalStrategy.md#authenticate)
- [error](infrastructure_common_strategies_local_strategy.LocalStrategy.md#error)
- [fail](infrastructure_common_strategies_local_strategy.LocalStrategy.md#fail)
- [pass](infrastructure_common_strategies_local_strategy.LocalStrategy.md#pass)
- [redirect](infrastructure_common_strategies_local_strategy.LocalStrategy.md#redirect)
- [success](infrastructure_common_strategies_local_strategy.LocalStrategy.md#success)
- [validate](infrastructure_common_strategies_local_strategy.LocalStrategy.md#validate)

## Constructors

### constructor

• **new LocalStrategy**(`loginUsecaseProxy`, `logger`, `exceptionService`): [`LocalStrategy`](infrastructure_common_strategies_local_strategy.LocalStrategy.md)

Constructs a new instance of the LocalStrategy class.

#### Parameters

| Name                | Type                                                                                                                                               | Description               |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------ |
| `loginUsecaseProxy` | [`UseCaseProxy`](infrastructure_usecases_proxy_usecases_proxy.UseCaseProxy.md)\<[`LoginUseCases`](usecases_auth_login_usecases.LoginUseCases.md)\> | The login use case proxy. |
| `logger`            | [`LoggerService`](infrastructure_logger_logger_service.LoggerService.md)                                                                           | The logger service.       |
| `exceptionService`  | [`ExceptionsService`](infrastructure_exceptions_exceptions_service.ExceptionsService.md)                                                           | The exceptions service.   |

#### Returns

[`LocalStrategy`](infrastructure_common_strategies_local_strategy.LocalStrategy.md)

#### Overrides

PassportStrategy(Strategy).constructor

#### Defined in

[api/src/infrastructure/common/strategies/local.strategy.ts:21](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/local.strategy.ts#L21)

## Properties

### exceptionService

• `Private` `Readonly` **exceptionService**: [`ExceptionsService`](infrastructure_exceptions_exceptions_service.ExceptionsService.md)

The exceptions service.

#### Defined in

[api/src/infrastructure/common/strategies/local.strategy.ts:25](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/local.strategy.ts#L25)

---

### logger

• `Private` `Readonly` **logger**: [`LoggerService`](infrastructure_logger_logger_service.LoggerService.md)

The logger service.

#### Defined in

[api/src/infrastructure/common/strategies/local.strategy.ts:24](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/local.strategy.ts#L24)

---

### loginUsecaseProxy

• `Private` `Readonly` **loginUsecaseProxy**: [`UseCaseProxy`](infrastructure_usecases_proxy_usecases_proxy.UseCaseProxy.md)\<[`LoginUseCases`](usecases_auth_login_usecases.LoginUseCases.md)\>

The login use case proxy.

#### Defined in

[api/src/infrastructure/common/strategies/local.strategy.ts:23](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/local.strategy.ts#L23)

---

### name

• **name**: `string`

#### Inherited from

PassportStrategy(Strategy).name

#### Defined in

node_modules/.pnpm/@types+passport-local@1.0.38/node_modules/@types/passport-local/index.d.ts:46

## Methods

### authenticate

▸ **authenticate**(`req`, `options?`): `void`

Performs authentication for the request.
Note: Virtual function - re-implement in the strategy.

#### Parameters

| Name       | Type                                                                                   | Description                     |
| :--------- | :------------------------------------------------------------------------------------- | :------------------------------ |
| `req`      | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> | The request to authenticate.    |
| `options?` | `any`                                                                                  | Options passed to the strategy. |

#### Returns

`void`

#### Inherited from

PassportStrategy(Strategy).authenticate

#### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:20

---

### error

▸ **error**(`err`): `void`

Internal error while performing authentication.

Strategies should call this function when an internal error occurs
during the process of performing authentication; for example, if the
user directory is not available.

#### Parameters

| Name  | Type    |
| :---- | :------ |
| `err` | `Error` |

#### Returns

`void`

**`Api`**

public

#### Inherited from

PassportStrategy(Strategy).error

#### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:90

---

### fail

▸ **fail**(`challenge`, `status`): `void`

Fail authentication, with optional `challenge` and `status`, defaulting
to 401.

Strategies should call this function to fail an authentication attempt.

#### Parameters

| Name        | Type     | Description                                               |
| :---------- | :------- | :-------------------------------------------------------- |
| `challenge` | `any`    | (Can also be an object with 'message' and 'type' fields). |
| `status`    | `number` |                                                           |

#### Returns

`void`

**`Api`**

public

#### Inherited from

PassportStrategy(Strategy).fail

#### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:54

▸ **fail**(`status`): `void`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `status` | `number` |

#### Returns

`void`

#### Inherited from

PassportStrategy(Strategy).fail

#### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:55

---

### pass

▸ **pass**(): `void`

Pass without making a success or fail decision.

Under most circumstances, Strategies should not need to call this
function. It exists primarily to allow previous authentication state
to be restored, for example from an HTTP session.

#### Returns

`void`

**`Api`**

public

#### Inherited from

PassportStrategy(Strategy).pass

#### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:78

---

### redirect

▸ **redirect**(`url`, `status?`): `void`

Redirect to `url` with optional `status`, defaulting to 302.

Strategies should call this function to redirect the user (via their
user agent) to a third-party website for authentication.

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `url`     | `string` |
| `status?` | `number` |

#### Returns

`void`

**`Api`**

public

#### Inherited from

PassportStrategy(Strategy).redirect

#### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:67

---

### success

▸ **success**(`user`, `info?`): `void`

Authenticate `user`, with optional `info`.

Strategies should call this function to successfully authenticate a
user. `user` should be an object supplied by the application after it
has been given an opportunity to verify credentials. `info` is an
optional argument containing additional user information. This is
useful for third-party authentication strategies to pass profile
details.

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `user`  | `any` |
| `info?` | `any` |

#### Returns

`void`

**`Api`**

public

#### Inherited from

PassportStrategy(Strategy).success

#### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:42

---

### validate

▸ **validate**(`username`, `password`): `Promise`\<\{ `createDate`: `Date` ; `email`: `string` ; `hashRefreshToken`: `string` ; `id`: `string` ; `lastLogin`: `Date` ; `updatedDate`: `Date` ; `username`: `string` }\>

Validates the username and password for local strategy.

#### Parameters

| Name       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `username` | `string` | The username to validate. |
| `password` | `string` | The password to validate. |

#### Returns

`Promise`\<\{ `createDate`: `Date` ; `email`: `string` ; `hashRefreshToken`: `string` ; `id`: `string` ; `lastLogin`: `Date` ; `updatedDate`: `Date` ; `username`: `string` }\>

The validated user.

#### Defined in

[api/src/infrastructure/common/strategies/local.strategy.ts:36](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/local.strategy.ts#L36)
