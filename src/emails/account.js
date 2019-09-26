const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "adam.csaba.84@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}.`
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "adam.csaba.84@gmail.com",
    subject: "We are sorry",
    text: `Goodbye, ${name}.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
};
