function generateRandomString(stringLength) {
    // eslint-disable-next-line no-param-reassign
    stringLength = typeof stringLength === 'number' ? stringLength : 20;
    const possibleCharacters = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let str = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < stringLength; i++) {
        const randomChar = possibleCharacters.charAt(
            Math.floor(Math.random() * possibleCharacters.length)
        );
        str += randomChar;
    }
    return str;
};

module.exports = { generateRandomString }