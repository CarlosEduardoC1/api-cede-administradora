const nodemailer = require('nodemailer');


exports.send = async (req, res) => {

    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "naorespondacede@gmail.com",
            pass: "C2e0d2e1"
        },
        tls: { rejectUnauthorized: false }
    });
    const mailOptions = {
        from: 'naorespondacede@gmail.com',
        // to: 'erichson@cedeadministradora.com',
        to: "cnobre.trabalho@gmail.com",
        subject: req.body.assunto,
        text: "Olá! Este é um e-mail automático.\r\n\r\n"
            + "Você recebeu uma mensagem de " + req.body.nome +
            "\r\n\r\n\r\nMensagem: '" + req.body.mensagem + "'" +
            "\r\n\r\nPara responder à mensagem, envie um e-mail para " + req.body.email
    };

    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) { return res.status(400) }
        else { console.log(info); res.status(200) }
    });

    // console.log(ret);
    res.status(200);

}