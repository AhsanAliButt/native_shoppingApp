import validator from 'validator';

const checkEmpty = (val, key) => {
  if (validator.empty(val.trim())) {
    return `${key}`;
  } else {
    return '';
  }
};

const checkMinLength = (val, minLength, key) => {
  if (val.trim().length < minLength) {
    return `Please enter valid ${key}`;
  } else {
    return '';
  }
};

const validators = data => {
  const {userName, email, password} = data;
  if (userName !== undefined) {
    let emptyValidationText = checkEmpty(userName, 'Plz enter Your UserName');
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(userName, 3, 'userName');
      if (minLengthValidation !== '') {
        return minLengthValidation;
      }
    }
  }
  if (email !== undefined) {
    let emptyValidationText = checkEmpty(email, 'Plz enter Your UserName');
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      if (!validator.email(email)) {
        return 'Plz enter Valid Email';
      }
    }
  }
  if (password !== undefined) {
    let emptyValidationText = checkEmpty(
      password,
      'Please enter your password',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(password, 6, 'password');
      if (minLengthValidation !== '') {
        return minLengthValidation;
      }
    }
  }
};

export default validators;
