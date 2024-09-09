import User from "@/models/userModel";
import nodemailer from "nodemailer";
import bcryptjs from 'bcryptjs'

export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        // TODO: configure mail for usage
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {
                $set: {
                    verifyToken: hashedToken, verifyTokenExpiry: new Date(Date.now() + 3600000) // Expiry 1 hour from now
                }
            })
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {
                $set: {
                    forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: new Date(Date.now() + 3600000) // Expiry 1 hour from now
                }
            })
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "45493ef6df66d6",
                pass: "b48e72a591e8e1"
            }
        });

        const mailOptions = {
            from: 'hariomchouhan430@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>`,
        }

        const mailResponse = await transport.sendMail(mailOptions)
        return mailResponse

    } catch (error: any) {
        throw new Error(error.message)
    }
}