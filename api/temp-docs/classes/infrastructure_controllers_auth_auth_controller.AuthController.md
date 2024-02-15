[api](../README.md) / [Exports](../modules.md) / [infrastructure/controllers/auth/auth.controller](../modules/infrastructure_controllers_auth_auth_controller.md) / AuthController

# Class: AuthController

[infrastructure/controllers/auth/auth.controller](../modules/infrastructure_controllers_auth_auth_controller.md).AuthController

## Table of contents

### Constructors

- [constructor](infrastructure_controllers_auth_auth_controller.AuthController.md#constructor)

### Properties

- [exceptionsService](infrastructure_controllers_auth_auth_controller.AuthController.md#exceptionsservice)
- [isAuthUsecaseProxy](infrastructure_controllers_auth_auth_controller.AuthController.md#isauthusecaseproxy)
- [loginUsecaseProxy](infrastructure_controllers_auth_auth_controller.AuthController.md#loginusecaseproxy)
- [logoutUseCaseProxy](infrastructure_controllers_auth_auth_controller.AuthController.md#logoutusecaseproxy)
- [registerUseCaseProxy](infrastructure_controllers_auth_auth_controller.AuthController.md#registerusecaseproxy)

### Methods

- [isAuthenticated](infrastructure_controllers_auth_auth_controller.AuthController.md#isauthenticated)
- [login](infrastructure_controllers_auth_auth_controller.AuthController.md#login)
- [logout](infrastructure_controllers_auth_auth_controller.AuthController.md#logout)
- [refresh](infrastructure_controllers_auth_auth_controller.AuthController.md#refresh)
- [register](infrastructure_controllers_auth_auth_controller.AuthController.md#register)

## Constructors

### constructor

• **new AuthController**(`loginUsecaseProxy`, `registerUseCaseProxy`, `logoutUseCaseProxy`, `isAuthUsecaseProxy`, `exceptionsService`): [`AuthController`](infrastructure_controllers_auth_auth_controller.AuthController.md)

Constructs a new instance of the AuthController class.

#### Parameters

| Name                   | Type                                                                                                                                                                             | Description                                |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------- |
| `loginUsecaseProxy`    | [`UseCaseProxy`](infrastructure_usecases_proxy_usecases_proxy.UseCaseProxy.md)\<[`LoginUseCases`](usecases_auth_login_usecases.LoginUseCases.md)\>                               | The proxy for the LoginUseCases.           |
| `registerUseCaseProxy` | [`UseCaseProxy`](infrastructure_usecases_proxy_usecases_proxy.UseCaseProxy.md)\<[`RegisterUseCases`](usecases_auth_register_usecases.RegisterUseCases.md)\>                      | The proxy for the RegisterUseCases.        |
| `logoutUseCaseProxy`   | [`UseCaseProxy`](infrastructure_usecases_proxy_usecases_proxy.UseCaseProxy.md)\<[`LogoutUseCases`](usecases_auth_logout_usecases.LogoutUseCases.md)\>                            | The proxy for the LogoutUseCases.          |
| `isAuthUsecaseProxy`   | [`UseCaseProxy`](infrastructure_usecases_proxy_usecases_proxy.UseCaseProxy.md)\<[`IsAuthenticatedUseCases`](usecases_auth_isAuthenticated_usecases.IsAuthenticatedUseCases.md)\> | The proxy for the IsAuthenticatedUseCases. |
| `exceptionsService`    | [`ExceptionsService`](infrastructure_exceptions_exceptions_service.ExceptionsService.md)                                                                                         | The service for handling exceptions.       |

#### Returns

[`AuthController`](infrastructure_controllers_auth_auth_controller.AuthController.md)

#### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:50](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L50)

## Properties

### exceptionsService

• `Private` `Readonly` **exceptionsService**: [`ExceptionsService`](infrastructure_exceptions_exceptions_service.ExceptionsService.md)

The service for handling exceptions.

#### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:59](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L59)

---

### isAuthUsecaseProxy

• `Private` `Readonly` **isAuthUsecaseProxy**: [`UseCaseProxy`](infrastructure_usecases_proxy_usecases_proxy.UseCaseProxy.md)\<[`IsAuthenticatedUseCases`](usecases_auth_isAuthenticated_usecases.IsAuthenticatedUseCases.md)\>

The proxy for the IsAuthenticatedUseCases.

#### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:58](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L58)

---

### loginUsecaseProxy

• `Private` `Readonly` **loginUsecaseProxy**: [`UseCaseProxy`](infrastructure_usecases_proxy_usecases_proxy.UseCaseProxy.md)\<[`LoginUseCases`](usecases_auth_login_usecases.LoginUseCases.md)\>

The proxy for the LoginUseCases.

#### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:52](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L52)

---

### logoutUseCaseProxy

• `Private` `Readonly` **logoutUseCaseProxy**: [`UseCaseProxy`](infrastructure_usecases_proxy_usecases_proxy.UseCaseProxy.md)\<[`LogoutUseCases`](usecases_auth_logout_usecases.LogoutUseCases.md)\>

The proxy for the LogoutUseCases.

#### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:56](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L56)

---

### registerUseCaseProxy

• `Private` `Readonly` **registerUseCaseProxy**: [`UseCaseProxy`](infrastructure_usecases_proxy_usecases_proxy.UseCaseProxy.md)\<[`RegisterUseCases`](usecases_auth_register_usecases.RegisterUseCases.md)\>

The proxy for the RegisterUseCases.

#### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:54](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L54)

## Methods

### isAuthenticated

▸ **isAuthenticated**(`request`): `Promise`\<[`IsAuthPresenter`](infrastructure_controllers_auth_auth_presenter.IsAuthPresenter.md)\>

#### Parameters

| Name      | Type  |
| :-------- | :---- |
| `request` | `any` |

#### Returns

`Promise`\<[`IsAuthPresenter`](infrastructure_controllers_auth_auth_presenter.IsAuthPresenter.md)\>

#### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:151](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L151)

---

### login

▸ **login**(`auth`, `request`): `Promise`\<`string`\>

#### Parameters

| Name      | Type                                                                             |
| :-------- | :------------------------------------------------------------------------------- |
| `auth`    | [`AuthLoginDto`](infrastructure_controllers_auth_auth_dto_class.AuthLoginDto.md) |
| `request` | `any`                                                                            |

#### Returns

`Promise`\<`string`\>

#### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:110](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L110)

---

### logout

▸ **logout**(`request`): `Promise`\<`string`\>

#### Parameters

| Name      | Type  |
| :-------- | :---- |
| `request` | `any` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:135](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L135)

---

### refresh

▸ **refresh**(`request`): `Promise`\<`string`\>

#### Parameters

| Name                    | Type                                           |
| :---------------------- | :--------------------------------------------- |
| `request`               | `Object`                                       |
| `request.res`           | `Object`                                       |
| `request.res.setHeader` | (`arg0`: `string`, `arg1`: `string`) => `void` |
| `request.user`          | `Object`                                       |
| `request.user.username` | `string`                                       |

#### Returns

`Promise`\<`string`\>

#### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:168](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L168)

---

### register

▸ **register**(`body`): `Promise`\<`string`\>

#### Parameters

| Name   | Type                                                                                   |
| :----- | :------------------------------------------------------------------------------------- |
| `body` | [`AuthRegisterDto`](infrastructure_controllers_auth_auth_dto_class.AuthRegisterDto.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[api/src/infrastructure/controllers/auth/auth.controller.ts:70](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/controllers/auth/auth.controller.ts#L70)
