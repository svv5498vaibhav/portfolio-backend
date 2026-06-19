const validateContactInput = (data) => {
  const errors = [];

  if (!data.name || data.name.trim() === '') {
    errors.push({ field: 'name', message: 'Name is required' });
  }

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }

  if (!data.subject || data.subject.trim() === '') {
    errors.push({ field: 'subject', message: 'Subject is required' });
  }

  if (!data.message || data.message.trim() === '') {
    errors.push({ field: 'message', message: 'Message body is required' });
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

module.exports = {
  validateContactInput
};
