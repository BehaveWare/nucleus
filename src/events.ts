import { IEmitter, ISubscriber } from "./types";

/**
 * Creates an event name
 * @param appPrefix Application prefix of the event name
 * @param prefix Prefix of the event name (screen, page, service, etc.)
 * @param name Name of the event
 * @returns The event name
 */
export const createEventName = (
  appPrefix: string,
  prefix: string,
  name: string,
): string => `${appPrefix}:${prefix}:${name}`;

/**
 * Emits an event with a payload
 * @param event Name of event to emit
 * @param payload Payload of data to send to subscribers
 * @param emitter Event emitter
 */
export const emit = <T>(
  event: string,
  payload: T,
  emitter: IEmitter,
) => emitter.emit(event, payload);

/**
 * Adds a listener for a given event and creates a subscription
 * @param event Name of event to subscribe to
 * @param callback Function to be called when event is emitted
 * @param subscriber Event subscriber
 * @returns An event subscription
 */
export const addListener = <T, TSubscription>(
  event: string,
  callback: (message: T) => void,
  subscriber: ISubscriber<TSubscription>,
): TSubscription => subscriber.addListener(event, callback);
