const formValidation = (setErrors, { sender, subject, name, message }) => {
  const validationObj = {
    from: "",
    subject: "",
    name: "",
    message: "",
  };

  if (!sender.match(/^([A-Za-z0-9\.]+)(@{1}[A-Za-z0-9\.]+)$/m)) {
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

  if (!name.match(/^(\w{2,})\s(\w{2,})$/m)) {
    validationObj.name = "field needs your first & last name";
    setErrors((currErrors) => ({
      ...currErrors,
      name: "field needs your first & last name",
    }));
  } else {
    validationObj.name = undefined;
    setErrors((currErrors) => ({
      ...currErrors,
      name: undefined,
    }));
  }

  if (!subject.match(/[A-Za-z0-9]{5,}/)) {
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

  if (!message.match(/([A-Za-z0-9\W]{5,})+/m)) {
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
