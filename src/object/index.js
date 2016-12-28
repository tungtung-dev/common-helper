import {isJsonString} from "../json/index";
/**
 * Created by Tien Nguyen on 11/29/16.
 */
/**
 * Get Value from object
 * @param objectBody
 * @param keyChange
 * @param changeOption
 * @param objectReturn
 * @returns {*}
 */
function getValueChangeOption(objectBody, keyChange, changeOption, objectReturn) {
    let value = objectBody[keyChange] ? objectBody[keyChange] : changeOption.$default;
    if (changeOption.$get) {
        return isJsonString(value) ? JSON.parse(value) : value;
    }
    if (changeOption.$update) {
        return changeOption.$update(value, objectReturn)
    }
    if (changeOption.$set) {
        return changeOption.$set;
    }
}

/**
 * Parse body Object to data Object
 * @param objectBody
 * @param objectChange
 * @returns {{}}
 */
function convertData(objectBody, objectChange) {
    const keysChange = Object.keys(objectChange);
    let objectReturn = {};
    keysChange.map(keyChange => {
        let changeOption = objectChange[keyChange];
        objectReturn[keyChange] = getValueChangeOption(objectBody, keyChange, changeOption, objectReturn);
        return keyChange;
    });
    return objectReturn;
}

export {convertData}