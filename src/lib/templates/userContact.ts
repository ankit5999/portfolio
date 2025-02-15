export const userContactBody = (
    name: string,
    email: string,
    phone: string,
    country: string,
    subject: string,
    message: string
): string => {
    return `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">

<head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
</head>
<div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Welcome to Nectar! We’re thrilled to have you join the world’s best healthcare platform designed to support you every
                    step of the way.<div>
    </div>
</div>

<body
    style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation"
        style="max-width:37.5em;margin:0 auto;padding:20px 0 48px">
        <tbody>
            <tr style="width:100%">
                <td><img alt="AK" height="50" src="../../../public/assets/images/logo.svg"
                        style="display:block;outline:none;border:none;text-decoration:none;border:2px black dashed; border-radius: 100%; padding: 4px;"
                        width="52" />
                    <p style="font-size:16px;line-height:26px;margin:16px 0">Dear ${name},</p>
                    <p style="font-size:16px;line-height:26px;margin:16px 0">
                    Thank you for contacting me! I have received your message and will get back to you as soon as possible. This is an system generated message, please don't
                    reply back to this.</p>
                    <div style="color:gray">
                    <p>Here's a copy of your message:</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Country:</strong> ${country}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                    </div>
                    
                    <p style="font-size:16px;line-height:26px;margin:16px 0">Best,<br />Ankit Kumar</p>
                    <hr
                        style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0" />
                    <p style="font-size:12px;line-height:24px;margin:16px 0;color:#8898aa">Gurugram, Haryana, India<br />+91 8396836615</p>
                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>`;
};
