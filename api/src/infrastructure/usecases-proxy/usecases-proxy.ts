/**
 * A generic proxy class for use cases.
 * @template T - The type of the use case.
 */
export class UseCaseProxy<T> {
  constructor(private readonly useCase: T) {}
  getInstance(): T {
    return this.useCase;
  }
}
