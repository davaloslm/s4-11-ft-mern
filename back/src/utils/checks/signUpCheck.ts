import { body } from 'express-validator'
export const signUpCheck = () => {
    return [
        body('email')
            .toLowerCase()
            .notEmpty()
            .withMessage('Email field is required')
            .isEmail()
            .withMessage('Please enter a valid email address'),
        body('password', 'El password debe de ser de 6 caracteres')
            .isStrongPassword()
            .withMessage(
                'The Password has to contain min 8 chars, 1 lowercase(min), 1 uppercase(min), 1 number(min), 1 symbol(min) '
            ),
    ]
}