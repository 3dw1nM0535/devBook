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
    html: `
      <p>Welcome to Events.com. Click the below link to confirm your email.</p>
      <a href='${user.generateConfirmationUrl()}'>Email confirmation</a>
    `,
  };

  transport.sendMail(email);
}

export function sendResetPasswordEmail(user) {
  const transport = setUp();
  const email = {
    from,
    to: user.email,
    subject: "Password reset link.",
    html: `
      <p>Please click the link below to reset your password.</p>
      <a href='${user.generatePasswordResetLink()}'>Reset password</a>
    `,
  };

  transport.sendMail(email);
}
