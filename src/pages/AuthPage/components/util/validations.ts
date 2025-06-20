/**
 * Validates whether a given email string is in a proper email format.
 *
 * @param email - The email string to validate.
 * @returns True if the email is valid, false otherwise.
 */
export function isValidEmail(email: string): boolean {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
}

/**
 * Validates whether a given password string meets the following criteria:
 *   1. Has at least one lowercase letter.
 *   2. Has at least one uppercase letter.
 *   3. Has at least one digit.
 *   4. Has at least 8 characters.
 *
 * @param password - The password string to validate.
 * @returns True if the password is valid, false otherwise.
 */
export function isValidPassword(password: string): boolean {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}

/**
 * Validates whether a given username string meets the following criteria:
 *   1. Starts with a letter (A-Za-z).
 *   2. Has at least 5 characters.
 *   3. Only uses letters (A-Za-z), numbers (0-9) and underscores (_).
 *
 * @param username - The username string to validate.
 * @returns True if the username is valid, false otherwise.
 */
export function isValidUsername(username: string): boolean {
    return /^[A-Za-z][A-Za-z0-9_]{4,}$/.test(username);
}

export function isValidFullName(name: string): boolean {
    return /^[a-zA-Z]{3,}([ -][a-zA-Z]+)*$/.test(name);
}
