import { nanoid } from 'nanoid';

/**
 * Generate random ID
 * @example generateID() => "V1StGXR8_Z5jdHi6B-myT"
 *
 * @returns {string}
 */

function generateID() {
  return nanoid();
}

export default generateID;
