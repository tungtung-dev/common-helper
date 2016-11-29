/**
 * Created by Tien Nguyen on 11/28/16.
 * @return {boolean}
 */
/**
 * Check json String
 * @param str
 * @returns {boolean}
 */
function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export {isJsonString}

export default {isJsonString}