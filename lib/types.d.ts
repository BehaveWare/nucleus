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
