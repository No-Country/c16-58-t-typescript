[api](../README.md) / [Exports](../modules.md) / infrastructure/config/environment/environment-config.validation

# Module: infrastructure/config/environment/environment-config.validation

## Table of contents

### Functions

- [validate](infrastructure_config_environment_environment_config_validation.md#validate)

## Functions

### validate

▸ **validate**(`config`): `EnvironmentVariables`

Validates the environment configuration object.

#### Parameters

| Name     | Type                            | Description                                       |
| :------- | :------------------------------ | :------------------------------------------------ |
| `config` | `Record`\<`string`, `unknown`\> | The environment configuration object to validate. |

#### Returns

`EnvironmentVariables`

The validated environment configuration object.

**`Throws`**

Error if there are validation errors.

#### Defined in

[api/src/infrastructure/config/environment/environment-config.validation.ts:44](https://github.com/No-Country/c16-58-t-typescript/blob/d2fd85f/api/src/infrastructure/config/environment/environment-config.validation.ts#L44)
