// Send confirmation email
import nodemailer from "nodemailer";

import privateKeys from "../../config/private_keys";

const from = "'events' <info@events.com";

function setUp() {
  return nodemailer.createTransport({
    host: privateKeys.EMAIL_HOST,
    port: privateKeys.EMAIL_PORT,
    auth: {
      user: privateKeys.EMAIL_USER,
      pass: privateKeys.EMAIL_PASS,
    },
  });
}

export function sendConfirmationEmail(user) {
  const transport = setUp();
  const email = {
    from,
    to: user.email,
    subject: "Welcome to Events.com",
    text: `
      Welcome to Events.com. Please confirm your email.
      ${user.generateConfirmationUrl()}
    `,
  };

  transport.sendMail(email);
}
