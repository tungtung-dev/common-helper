/**
 * Created by Tien Nguyen on 11/29/16.
 */
/**
 *
 * @param objectBody
 * @param keyChange
 * @param changeOption
 * @returns {*}
 */
function getValueChangeOption(objectBody, keyChange, changeOption) {
    const value = objectBody[keyChange] ? objectBody[keyChange] : changeOption.$default;
    if (changeOption.$get) {
        return value;
    }
    if (changeOption.$update) {
        return changeOption.$update(value)
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
        objectReturn[keyChange] = getValueChangeOption(objectBody, keyChange, changeOption);
        return keyChange;
    });
    return objectReturn;
}

export {convertData}