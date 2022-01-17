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

/**
 * Interface for an Event Emitter
 */
export interface IEmitter {
  /**
   * Emits an event with an optional payload
   * @param event Name of the event to be emitted
   * @param payload Payload of data to be sent to subscribers
   */
  emit: (event: string, payload?: any) => void;
}

/**
 * Interface for an Event Subscriber
 */
export interface ISubscriber<TSubscription> {
  /**
   * Adds a listener for an event
   * @param event Name of the event to listen for
   * @param listener Function to be called when the event is emitted
   */
  addListener: (
    event: string,
    listener: (data?: any) => void,
  ) => TSubscription;
}
