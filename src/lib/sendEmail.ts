import nodemailer from "nodemailer";

export default async function sendEmail(
  email: string,
  name: string,
  message: string
): Promise<boolean> {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST as string,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER as string,
      pass: process.env.SMTP_PASS as string,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.SMTP_MY_EMAIL as string,
    subject: `Mr/Ms ${name} is Contact You!`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch {
    return false;
  }
}
