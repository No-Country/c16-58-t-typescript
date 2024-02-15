[api](../README.md) / [Exports](../modules.md) / [infrastructure/common/strategies/jwtRefresh.strategy](../modules/infrastructure_common_strategies_jwtRefresh_strategy.md) / JwtRefreshTokenStrategy

# Class: JwtRefreshTokenStrategy

[infrastructure/common/strategies/jwtRefresh.strategy](../modules/infrastructure_common_strategies_jwtRefresh_strategy.md).JwtRefreshTokenStrategy

## Hierarchy

- `Strategy`\<`this`\>

  ↳ **`JwtRefreshTokenStrategy`**

## Table of contents

### Constructors

- [constructor](infrastructure_common_strategies_jwtRefresh_strategy.JwtRefreshTokenStrategy.md#constructor)

### Properties

- [configService](infrastructure_common_strategies_jwtRefresh_strategy.JwtRefreshTokenStrategy.md#configservice)
- [exceptionService](infrastructure_common_strategies_jwtRefresh_strategy.JwtRefreshTokenStrategy.md#exceptionservice)
- [logger](infrastructure_common_strategies_jwtRefresh_strategy.JwtRefreshTokenStrategy.md#logger)
- [loginUsecaseProxy](infrastructure_common_strategies_jwtRefresh_strategy.JwtRefreshTokenStrategy.md#loginusecaseproxy)
- [name](infrastructure_common_strategies_jwtRefresh_strategy.JwtRefreshTokenStrategy.md#name)

### Methods

- [authenticate](infrastructure_common_strategies_jwtRefresh_strategy.JwtRefreshTokenStrategy.md#authenticate)
- [error](infrastructure_common_strategies_jwtRefresh_strategy.JwtRefreshTokenStrategy.md#error)
- [fail](infrastructure_common_strategies_jwtRefresh_strategy.JwtRefreshTokenStrategy.md#fail)
- [pass](infrastructure_common_strategies_jwtRefresh_strategy.JwtRefreshTokenStrategy.md#pass)
- [redirect](infrastructure_common_strategies_jwtRefresh_strategy.JwtRefreshTokenStrategy.md#redirect)
- [success](infrastructure_common_strategies_jwtRefresh_strategy.JwtRefreshTokenStrategy.md#success)
- [validate](infrastructure_common_strategies_jwtRefresh_strategy.JwtRefreshTokenStrategy.md#validate)

## Constructors

### constructor

• **new JwtRefreshTokenStrategy**(`configService`, `loginUsecaseProxy`, `logger`, `exceptionService`): [`JwtRefreshTokenStrategy`](infrastructure_common_strategies_jwtRefresh_strategy.JwtRefreshTokenStrategy.md)

Constructs a new instance of the JwtRefreshStrategy class.

#### Parameters

| Name                | Type                                                                                                                                               | Description                            |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------- |
| `configService`     | [`EnvironmentConfigService`](infrastructure_config_environment_environment_config_service.EnvironmentConfigService.md)                             | The environment configuration service. |
| `loginUsecaseProxy` | [`UseCaseProxy`](infrastructure_usecases_proxy_usecases_proxy.UseCaseProxy.md)\<[`LoginUseCases`](usecases_auth_login_usecases.LoginUseCases.md)\> | The login use case proxy.              |
| `logger`            | [`LoggerService`](infrastructure_logger_logger_service.LoggerService.md)                                                                           | The logger service.                    |
| `exceptionService`  | [`ExceptionsService`](infrastructure_exceptions_exceptions_service.ExceptionsService.md)                                                           | The exceptions service.                |

#### Returns

[`JwtRefreshTokenStrategy`](infrastructure_common_strategies_jwtRefresh_strategy.JwtRefreshTokenStrategy.md)

#### Overrides

PassportStrategy(
Strategy,
&#x27;jwt-refresh-token&#x27;,
).constructor

#### Defined in

[api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts:28](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts#L28)

## Properties

### configService

• `Private` `Readonly` **configService**: [`EnvironmentConfigService`](infrastructure_config_environment_environment_config_service.EnvironmentConfigService.md)

The environment configuration service.

#### Defined in

[api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts:29](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts#L29)

---

### exceptionService

• `Private` `Readonly` **exceptionService**: [`ExceptionsService`](infrastructure_exceptions_exceptions_service.ExceptionsService.md)

The exceptions service.

#### Defined in

[api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts:33](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts#L33)

---

### logger

• `Private` `Readonly` **logger**: [`LoggerService`](infrastructure_logger_logger_service.LoggerService.md)

The logger service.

#### Defined in

[api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts:32](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts#L32)

---

### loginUsecaseProxy

• `Private` `Readonly` **loginUsecaseProxy**: [`UseCaseProxy`](infrastructure_usecases_proxy_usecases_proxy.UseCaseProxy.md)\<[`LoginUseCases`](usecases_auth_login_usecases.LoginUseCases.md)\>

The login use case proxy.

#### Defined in

[api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts:31](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts#L31)

---

### name

• **name**: `string`

#### Inherited from

PassportStrategy(
Strategy,
'jwt-refresh-token',
).name

#### Defined in

node_modules/.pnpm/@types+passport-jwt@4.0.1/node_modules/@types/passport-jwt/index.d.ts:13

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

PassportStrategy(
Strategy,
'jwt-refresh-token',
).authenticate

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

PassportStrategy(
Strategy,
'jwt-refresh-token',
).error

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

PassportStrategy(
Strategy,
'jwt-refresh-token',
).fail

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

PassportStrategy(
Strategy,
'jwt-refresh-token',
).fail

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

PassportStrategy(
Strategy,
'jwt-refresh-token',
).pass

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

PassportStrategy(
Strategy,
'jwt-refresh-token',
).redirect

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

PassportStrategy(
Strategy,
'jwt-refresh-token',
).success

#### Defined in

node_modules/.pnpm/@types+passport-strategy@0.2.38/node_modules/@types/passport-strategy/index.d.ts:42

---

### validate

▸ **validate**(`request`, `payload`): `Promise`\<[`UserModel`](domain_model_user.UserModel.md)\>

Validates the request and payload for JWT refresh strategy.

#### Parameters

| Name      | Type                                                                                   | Description         |
| :-------- | :------------------------------------------------------------------------------------- | :------------------ |
| `request` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> | The request object. |
| `payload` | [`TokenPayload`](../interfaces/domain_model_auth.TokenPayload.md)                      | The token payload.  |

#### Returns

`Promise`\<[`UserModel`](domain_model_user.UserModel.md)\>

The user object if validation is successful.

#### Defined in

[api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts:52](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/strategies/jwtRefresh.strategy.ts#L52)
