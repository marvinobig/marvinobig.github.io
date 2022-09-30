const formValidation = (
  errors,
  setErrors,
  { from, subject, name, message }
) => {
  if (!from.includes("@") || !from.includes(".com")) {
    setErrors((currErrors) => ({
      ...currErrors,
      from: "field needs an email address",
    }));
  } else {
    setErrors((currErrors) => ({
      ...currErrors,
      from: undefined,
    }));
  }

  if (name.length <= 2 || !name.match(/\s/)) {
    setErrors((currErrors) => ({
      ...currErrors,
      name: "field needs your full name and 2 or more characters",
    }));
  } else {
    setErrors((currErrors) => ({
      ...currErrors,
      name: undefined,
    }));
  }

  if (subject.length <= 5) {
    setErrors((currErrors) => ({
      ...currErrors,
      subject: "subject needs to be 5 characters or more",
    }));
  } else {
    setErrors((currErrors) => ({
      ...currErrors,
      subject: undefined,
    }));
  }

  if (message === "") {
    setErrors((currErrors) => ({
      ...currErrors,
      message: "message needs to be provided",
    }));
  } else {
    setErrors((currErrors) => ({
      ...currErrors,
      message: undefined,
    }));
  }

  const errorValues = Object.values(errors);
  const errorsExist = errorValues.every((value) => value === undefined);

  console.log(errorsExist, errorValues);

  return errorsExist ? true : false;
};

export default formValidation;
