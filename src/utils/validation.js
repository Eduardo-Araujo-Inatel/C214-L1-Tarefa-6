const validate = require('validate.js');
const Constants = require('./constants');
const Constraints = require('./movie_validation');

const Validation = {
    create(data) {
        const validation = validate.validate(data, Constraints.create);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    },

    update(data) {
        const validation = validate.validate(data, Constraints.update);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    },

    getProducer(data) {
        const validation = validate.validate(data, Constraints.getProducer);
        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    },

};
module.exports = Validation;
