"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addListener = exports.emit = exports.createEventName = void 0;
/**
 * Creates an event name
 * @param appPrefix Application prefix of the event name
 * @param prefix Prefix of the event name (screen, page, service, etc.)
 * @param name Name of the event
 * @returns The event name
 */
const createEventName = (appPrefix, prefix, name) => `${appPrefix}:${prefix}:${name}`;
exports.createEventName = createEventName;
/**
 * Emits an event with a payload
 * @param event Name of event to emit
 * @param payload Payload of data to send to subscribers
 * @param emitter Event emitter
 */
const emit = (event, payload, emitter) => emitter.emit(event, payload);
exports.emit = emit;
/**
 * Adds a listener for a given event and creates a subscription
 * @param event Name of event to subscribe to
 * @param callback Function to be called when event is emitted
 * @param subscriber Event subscriber
 * @returns An event subscription
 */
const addListener = (event, callback, subscriber) => subscriber.addListener(event, callback);
exports.addListener = addListener;
