[api](../README.md) / [Exports](../modules.md) / [domain/exceptions/exceptions.interface](../modules/domain_exceptions_exceptions_interface.md) / IException

# Interface: IException

[domain/exceptions/exceptions.interface](../modules/domain_exceptions_exceptions_interface.md).IException

## Implemented by

- [`ExceptionsService`](../classes/infrastructure_exceptions_exceptions_service.ExceptionsService.md)

## Table of contents

### Methods

- [badRequestException](domain_exceptions_exceptions_interface.IException.md#badrequestexception)
- [forbiddenException](domain_exceptions_exceptions_interface.IException.md#forbiddenexception)
- [internalServerErrorException](domain_exceptions_exceptions_interface.IException.md#internalservererrorexception)
- [unauthorizedException](domain_exceptions_exceptions_interface.IException.md#unauthorizedexception)

## Methods

### badRequestException

▸ **badRequestException**(`data`): `void`

Throws a Bad Request exception with the specified format message.

#### Parameters

| Name   | Type                                                                                           | Description                           |
| :----- | :--------------------------------------------------------------------------------------------- | :------------------------------------ |
| `data` | [`IFormatExceptionMessage`](domain_exceptions_exceptions_interface.IFormatExceptionMessage.md) | The format message for the exception. |

#### Returns

`void`

#### Defined in

[api/src/domain/exceptions/exceptions.interface.ts:11](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/exceptions/exceptions.interface.ts#L11)

---

### forbiddenException

▸ **forbiddenException**(`data?`): `void`

Throws a Forbidden exception with the specified format message.

#### Parameters

| Name    | Type                                                                                           | Description                           |
| :------ | :--------------------------------------------------------------------------------------------- | :------------------------------------ |
| `data?` | [`IFormatExceptionMessage`](domain_exceptions_exceptions_interface.IFormatExceptionMessage.md) | The format message for the exception. |

#### Returns

`void`

#### Defined in

[api/src/domain/exceptions/exceptions.interface.ts:23](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/exceptions/exceptions.interface.ts#L23)

---

### internalServerErrorException

▸ **internalServerErrorException**(`data?`): `void`

Throws an Internal Server Error exception with the specified format message.

#### Parameters

| Name    | Type                                                                                           | Description                           |
| :------ | :--------------------------------------------------------------------------------------------- | :------------------------------------ |
| `data?` | [`IFormatExceptionMessage`](domain_exceptions_exceptions_interface.IFormatExceptionMessage.md) | The format message for the exception. |

#### Returns

`void`

#### Defined in

[api/src/domain/exceptions/exceptions.interface.ts:17](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/exceptions/exceptions.interface.ts#L17)

---

### unauthorizedException

▸ **unauthorizedException**(`data?`): `void`

Throws an Unauthorized exception with the specified format message.

#### Parameters

| Name    | Type                                                                                           | Description                           |
| :------ | :--------------------------------------------------------------------------------------------- | :------------------------------------ |
| `data?` | [`IFormatExceptionMessage`](domain_exceptions_exceptions_interface.IFormatExceptionMessage.md) | The format message for the exception. |

#### Returns

`void`

#### Defined in

[api/src/domain/exceptions/exceptions.interface.ts:29](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/domain/exceptions/exceptions.interface.ts#L29)
