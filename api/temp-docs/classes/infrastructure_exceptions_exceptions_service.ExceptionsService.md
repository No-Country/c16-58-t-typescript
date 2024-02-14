[api](../README.md) / [Exports](../modules.md) / [infrastructure/exceptions/exceptions.service](../modules/infrastructure_exceptions_exceptions_service.md) / ExceptionsService

# Class: ExceptionsService

[infrastructure/exceptions/exceptions.service](../modules/infrastructure_exceptions_exceptions_service.md).ExceptionsService

## Implements

- [`IException`](../interfaces/domain_exceptions_exceptions_interface.IException.md)

## Table of contents

### Constructors

- [constructor](infrastructure_exceptions_exceptions_service.ExceptionsService.md#constructor)

### Methods

- [badRequestException](infrastructure_exceptions_exceptions_service.ExceptionsService.md#badrequestexception)
- [conflictException](infrastructure_exceptions_exceptions_service.ExceptionsService.md#conflictexception)
- [forbiddenException](infrastructure_exceptions_exceptions_service.ExceptionsService.md#forbiddenexception)
- [internalServerErrorException](infrastructure_exceptions_exceptions_service.ExceptionsService.md#internalservererrorexception)
- [throwException](infrastructure_exceptions_exceptions_service.ExceptionsService.md#throwexception)
- [unauthorizedException](infrastructure_exceptions_exceptions_service.ExceptionsService.md#unauthorizedexception)

## Constructors

### constructor

• **new ExceptionsService**(): [`ExceptionsService`](infrastructure_exceptions_exceptions_service.ExceptionsService.md)

#### Returns

[`ExceptionsService`](infrastructure_exceptions_exceptions_service.ExceptionsService.md)

## Methods

### badRequestException

▸ **badRequestException**(`data`): `void`

Throws a BadRequestException with the provided format exception message.

#### Parameters

| Name   | Type                                                                                                         | Description                   |
| :----- | :----------------------------------------------------------------------------------------------------------- | :---------------------------- |
| `data` | [`IFormatExceptionMessage`](../interfaces/domain_exceptions_exceptions_interface.IFormatExceptionMessage.md) | The format exception message. |

#### Returns

`void`

#### Implementation of

[IException](../interfaces/domain_exceptions_exceptions_interface.IException.md).[badRequestException](../interfaces/domain_exceptions_exceptions_interface.IException.md#badrequestexception)

#### Defined in

[api/src/infrastructure/exceptions/exceptions.service.ts:48](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/exceptions/exceptions.service.ts#L48)

---

### conflictException

▸ **conflictException**(`data?`): `void`

Throws a ConflictException with optional data.

#### Parameters

| Name    | Type                                                                                                         | Description                                          |
| :------ | :----------------------------------------------------------------------------------------------------------- | :--------------------------------------------------- |
| `data?` | [`IFormatExceptionMessage`](../interfaces/domain_exceptions_exceptions_interface.IFormatExceptionMessage.md) | Optional data to be passed to the ConflictException. |

#### Returns

`void`

#### Defined in

[api/src/infrastructure/exceptions/exceptions.service.ts:39](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/exceptions/exceptions.service.ts#L39)

---

### forbiddenException

▸ **forbiddenException**(`data?`): `void`

Throws a ForbiddenException with the optional format exception message.

#### Parameters

| Name    | Type                                                                                                         | Description                              |
| :------ | :----------------------------------------------------------------------------------------------------------- | :--------------------------------------- |
| `data?` | [`IFormatExceptionMessage`](../interfaces/domain_exceptions_exceptions_interface.IFormatExceptionMessage.md) | The format exception message (optional). |

#### Returns

`void`

#### Implementation of

[IException](../interfaces/domain_exceptions_exceptions_interface.IException.md).[forbiddenException](../interfaces/domain_exceptions_exceptions_interface.IException.md#forbiddenexception)

#### Defined in

[api/src/infrastructure/exceptions/exceptions.service.ts:66](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/exceptions/exceptions.service.ts#L66)

---

### internalServerErrorException

▸ **internalServerErrorException**(`data?`): `void`

Throws an InternalServerErrorException with the optional format exception message.

#### Parameters

| Name    | Type                                                                                                         | Description                              |
| :------ | :----------------------------------------------------------------------------------------------------------- | :--------------------------------------- |
| `data?` | [`IFormatExceptionMessage`](../interfaces/domain_exceptions_exceptions_interface.IFormatExceptionMessage.md) | The format exception message (optional). |

#### Returns

`void`

#### Implementation of

[IException](../interfaces/domain_exceptions_exceptions_interface.IException.md).[internalServerErrorException](../interfaces/domain_exceptions_exceptions_interface.IException.md#internalservererrorexception)

#### Defined in

[api/src/infrastructure/exceptions/exceptions.service.ts:57](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/exceptions/exceptions.service.ts#L57)

---

### throwException

▸ **throwException**(`exception`, `message?`): `void`

Throws a BadRequestException with the provided format exception message.

#### Parameters

| Name        | Type                                                                                                         |
| :---------- | :----------------------------------------------------------------------------------------------------------- |
| `exception` | `any`                                                                                                        |
| `message?`  | [`IFormatExceptionMessage`](../interfaces/domain_exceptions_exceptions_interface.IFormatExceptionMessage.md) |

#### Returns

`void`

#### Defined in

[api/src/infrastructure/exceptions/exceptions.service.ts:24](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/exceptions/exceptions.service.ts#L24)

---

### unauthorizedException

▸ **unauthorizedException**(`data?`): `void`

Throws an UnauthorizedException with the optional format exception message.

#### Parameters

| Name    | Type                                                                                                         | Description                              |
| :------ | :----------------------------------------------------------------------------------------------------------- | :--------------------------------------- |
| `data?` | [`IFormatExceptionMessage`](../interfaces/domain_exceptions_exceptions_interface.IFormatExceptionMessage.md) | The format exception message (optional). |

#### Returns

`void`

#### Implementation of

[IException](../interfaces/domain_exceptions_exceptions_interface.IException.md).[unauthorizedException](../interfaces/domain_exceptions_exceptions_interface.IException.md#unauthorizedexception)

#### Defined in

[api/src/infrastructure/exceptions/exceptions.service.ts:75](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/exceptions/exceptions.service.ts#L75)
