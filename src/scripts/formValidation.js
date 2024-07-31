const formValid = (setErrors, { sender, subject, name, message }) => {
  const validationObj = {
    from: "",
    subject: "",
    name: "",
    message: "",
  };

  if (!sender.match(/^([A-Za-z0-9\.]+)(@{1}[A-Za-z0-9\.]+)$/m)) {
    validationObj.from = "field needs a valid email address";
    setErrors((currErrors) => ({
      ...currErrors,
      from: validationObj.from,
    }));
  } else {
    validationObj.from = undefined;
    setErrors((currErrors) => ({
      ...currErrors,
      from: validationObj.from,
    }));
  }

  if (!name.match(/^\w{2,}/m)) {
    validationObj.name = "field needs your name";
    setErrors((currErrors) => ({
      ...currErrors,
      name: validationObj.name,
    }));
  } else {
    validationObj.name = undefined;
    setErrors((currErrors) => ({
      ...currErrors,
      name: validationObj.name,
    }));
  }

  if (!subject.match(/[A-Za-z0-9]{2,}/)) {
    validationObj.subject = "field needs to include 2 characters or more";
    setErrors((currErrors) => ({
      ...currErrors,
      subject: validationObj.subject,
    }));
  } else {
    validationObj.subject = undefined;
    setErrors((currErrors) => ({
      ...currErrors,
      subject: validationObj.subject,
    }));
  }

  if (!message.match(/([A-Za-z0-9\W]{5,})+/m)) {
    validationObj.message = "field needs to include a sentence";
    setErrors((currErrors) => ({
      ...currErrors,
      message: validationObj.message,
    }));
  } else {
    validationObj.message = undefined;
    setErrors((currErrors) => ({
      ...currErrors,
      message: validationObj.message,
    }));
  }

  const errorValues = Object.values(validationObj);
  const errorsDoNotExist = errorValues.every((value) => value === undefined);

  return errorsDoNotExist;
};

export default formValid;
