/**
 * Interface for an object that can be compared with another of the same type
 */
export interface IComparable<T> {
  /**
   * Method to determine that two objects are equal
   * @param object Object to compare with this one
   * @returns boolean
   */
  equals: (object: T) => boolean;
}

/**
 * Interface for a serializable object capable of
 * returning a JSON string representation of itself
 */
export interface ISerializable {
  /**
   * Returns a JSON string representation of the object
   * @returns JSON string
   */
  toJSON: () => string;
}

export interface IEmitter {
  emit: (event: string, payload: any) => void;
}

export interface ISubscriber<TSubscription> {
  addListener: (
    event: string,
    listener: (data: any) => void,
  ) => TSubscription;
}

/**
 * Application prefix for an event name
 */
export type AppEventPrefix = string;

/**
 * Prefix for an event name usually the screen, page, service, etc.
 */
export type EventPrefix = string;

/**
 * Name of an event matching the format of:
 * `AppEventPrefix:EventPrefix:string`
 */
export type EventName = `${AppEventPrefix}:${EventPrefix}:${string}`;
