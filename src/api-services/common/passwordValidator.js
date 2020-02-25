const passwordValidator = require('password-validator');

var passwordSchema = new passwordValidator();

// Add properties
passwordSchema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits()                                 // Must have digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['password', 'password123','Password', 'Password123']); // Blacklist these values

exports.validate = async (password) => {
    return passwordSchema.validate(password, {list: true});
};