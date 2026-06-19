const ContactMessage = require('../models/ContactMessage');
const { validateContactInput } = require('../utils/validation');
const { sendEmail } = require('../utils/mailer');

// Submit contact form message
exports.submitContact = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate inputs
    const { isValid, errors } = validateContactInput(req.body);
    if (!isValid) {
      return res.status(400).json({
        success: false,
        errors
      });
    }

    // Save message to database
    const newMessage = await ContactMessage.create({
      name,
      email,
      subject,
      message,
      ipAddress: req.ip
    });

    // Send email alert (fail-silent to avoid blocking response)
    try {
      await sendEmail({ name, email, subject, message });
    } catch (mailError) {
      console.error(`Mailer Error: ${mailError.message}`);
    }

    res.status(201).json({
      success: true,
      message: 'Message sent successfully. Vaibhav will get back to you soon!',
      data: newMessage
    });
  } catch (error) {
    next(error);
  }
};
