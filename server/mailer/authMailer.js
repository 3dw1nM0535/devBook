import nodemailer from 'nodemailer';

const from = '"devBook" <info@devBook.com';

function setUp() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

export function sendConfirmationEmail(user) {
  const transport = setUp();
  const email = {
    from,
    to: user.email,
    subject: 'Welcome to devBook.',
    html: `
    <p>Welcome to devBook. Follow the link below to confirm your account</p>
    <b><a href=${user.generateConfirmationUrl()}>Confirm your Account</a></b>
    `,
  };

  transport.sendMail(email);
}

export function sendResetPasswordEmail(user) {
  const transport = setUp();
  const email = {
    from,
    to: user.email,
    subject: 'Reset password',
    html: `
    <p>Follow the link below to reset your password</p>
    <b><a href=${user.generatePasswordResetLink()}>Reset password</a></b>
    `,
  };

  transport.sendMail(email);
}
