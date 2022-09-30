const formValidation = (setErrors, { sender, subject, name, message }) => {
  const validationObj = {
    from: "",
    subject: "",
    name: "",
    message: "",
  };

  if (!sender.includes("@") || !sender.includes(".com")) {
    validationObj.from = "field needs an email address";
    setErrors((currErrors) => ({
      ...currErrors,
      from: "field needs an email address",
    }));
  } else {
    validationObj.from = undefined;
    setErrors((currErrors) => ({
      ...currErrors,
      from: undefined,
    }));
  }

  if (name.length <= 2 || !name.match(/\s/)) {
    validationObj.name = "field needs your full name and 2 or more characters";
    setErrors((currErrors) => ({
      ...currErrors,
      name: "field needs your full name and 2 or more characters",
    }));
  } else {
    validationObj.name = undefined;
    setErrors((currErrors) => ({
      ...currErrors,
      name: undefined,
    }));
  }

  if (subject.length <= 5) {
    validationObj.subject = "subject needs to be 5 characters or more";
    setErrors((currErrors) => ({
      ...currErrors,
      subject: "subject needs to be 5 characters or more",
    }));
  } else {
    validationObj.subject = undefined;
    setErrors((currErrors) => ({
      ...currErrors,
      subject: undefined,
    }));
  }

  if (message === "") {
    validationObj.message = "message needs to be provided";
    setErrors((currErrors) => ({
      ...currErrors,
      message: "message needs to be provided",
    }));
  } else {
    validationObj.message = undefined;
    setErrors((currErrors) => ({
      ...currErrors,
      message: undefined,
    }));
  }

  const errorValues = Object.values(validationObj);
  const errorsExist = errorValues.every((value) => value === undefined);

  return errorsExist ? true : false;
};

export default formValidation;
