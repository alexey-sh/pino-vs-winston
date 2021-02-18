const crypto = require('crypto');

module.exports = {

    getTestObj: function getTestObj() {
    const r = () => {
        return crypto.randomBytes(20).toString('hex');
    }
    return {
        [r()]: {
            [r()]: {
                [r()]: {
                    [r()]: {
                        [r()]: {
                            [r()]: {
                                [r()]: {
                                    bigInt: 1
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
}