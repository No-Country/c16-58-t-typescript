[api](../README.md) / [Exports](../modules.md) / infrastructure/common/swagger/response.decorator

# Module: infrastructure/common/swagger/response.decorator

## Table of contents

### Functions

- [ApiResponseType](infrastructure_common_swagger_response_decorator.md#apiresponsetype)

## Functions

### ApiResponseType

▸ **ApiResponseType**\<`TModel`\>(`model`, `isArray`): \<TFunction, Y\>(`target`: `object` \| `TFunction`, `propertyKey?`: `string` \| `symbol`, `descriptor?`: `TypedPropertyDescriptor`\<`Y`\>) => `void`

Decorator that specifies the response type for an API endpoint.

#### Type parameters

| Name     | Type                    |
| :------- | :---------------------- |
| `TModel` | extends `Type`\<`any`\> |

#### Parameters

| Name      | Type      | Description                                      |
| :-------- | :-------- | :----------------------------------------------- |
| `model`   | `TModel`  | The model type for the response data.            |
| `isArray` | `boolean` | Indicates whether the response data is an array. |

#### Returns

`fn`

The decorated function.

▸ \<`TFunction`, `Y`\>(`target`, `propertyKey?`, `descriptor?`): `void`

##### Type parameters

| Name        | Type               |
| :---------- | :----------------- |
| `TFunction` | extends `Function` |
| `Y`         | `Y`                |

##### Parameters

| Name           | Type                             |
| :------------- | :------------------------------- |
| `target`       | `object` \| `TFunction`          |
| `propertyKey?` | `string` \| `symbol`             |
| `descriptor?`  | `TypedPropertyDescriptor`\<`Y`\> |

##### Returns

`void`

#### Defined in

[api/src/infrastructure/common/swagger/response.decorator.ts:12](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/common/swagger/response.decorator.ts#L12)
