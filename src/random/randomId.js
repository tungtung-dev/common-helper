/**
 * Created by Tien Nguyen on 11/21/16.
 */

const RANDOM_CHARACTER_LENGTH = 5;
const RANDOM_CHARACTER_SOURCE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

/**
 * Support generate random string with 5 characters
 * @returns {string}
 */
function makeId(length = RANDOM_CHARACTER_LENGTH) {
    let text = "";
    for (let i = 0; i < length; i++) {
        text += RANDOM_CHARACTER_SOURCE.charAt(Math.floor(Math.random() * RANDOM_CHARACTER_SOURCE.length));
    }

    return text;
}

export {makeId}

export default {makeId}
