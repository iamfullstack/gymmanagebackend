import crypto from "crypto";

//  hash password with sha512.
//  @function
//  @param {string} password - List of required fields.
//  @param {string} salt - Data to be validated.

const sha512 = (password, salt) => {
  const hash = crypto.createHmac("sha512", salt); // Hashing algorithm sha512
  hash.update(password);
  const value = hash.digest("hex");
  return {
    salt: salt,
    passwordHash: value,
  };
};
const genRandomString = (length) => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex") // convert to hexadecimal format
    .slice(0, length); // return required number of characters
};

export const generateSalt = (length = 255) => {
  return genRandomString(length); // Gives us salt of length 16
};

export const hashPassword = (userPassword) => {
  const salt = genRandomString(255); // Gives us salt of length 16
  const passwordData = sha512(userPassword, salt);
  return {
    salt: passwordData.salt,
    hash: passwordData.passwordHash,
  };
};

export const isPasswordCorrect = (savedPass, salt, userPassword) => {
  const passwordData = sha512(userPassword, salt);
  return savedPass === passwordData.passwordHash;
};
