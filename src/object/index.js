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
        let valueKeyReturn = getValueChangeOption(objectBody, keyChange, changeOption, objectReturn);
        if(valueKeyReturn !== undefined && valueKeyReturn !== null){
            objectReturn[keyChange] = valueKeyReturn;
        }
        return keyChange;
    });
    return objectReturn;
}

export {convertData}
