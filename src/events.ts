import {
  AppEventPrefix,
  EventName,
  EventPrefix,
  IEmitter,
  ISubscriber,
} from "./types";

export const createEventName = (
  appPrefix: AppEventPrefix,
  prefix: EventPrefix,
  name: string,
): EventName => `${appPrefix}:${prefix}:${name}`;

export const emit = <T>(
  event: EventName,
  payload: T,
  emitter: IEmitter,
) => emitter.emit(event, payload);

export const addListener = <T, TSubscription>(
  event: EventName,
  callback: (message: T) => void,
  subscriber: ISubscriber<TSubscription>,
): TSubscription => subscriber.addListener(event, callback);
