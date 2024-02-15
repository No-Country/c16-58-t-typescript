import { ResponseFormat } from '../interceptor/response.interceptor';
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { applyDecorators, Type } from '@nestjs/common';

/**
 * Decorator that specifies the response type for an API endpoint.
 *
 * @param model - The model type for the response data.
 * @param isArray - Indicates whether the response data is an array.
 * @returns The decorated function.
 */
export function ApiResponseType<TModel extends Type<any>>(
  model: TModel,
  isArray: boolean,
) {
  return applyDecorators(
    ApiOkResponse({
      isArray: isArray,
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResponseFormat) },
          {
            properties: {
              data: {
                $ref: getSchemaPath(model),
              },
              isArray: {
                type: 'boolean',
                default: isArray,
              },
            },
          },
        ],
      },
    }),
  );
}
