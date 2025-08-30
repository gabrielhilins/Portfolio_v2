import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const contactEmail = process.env.CONTACT_EMAIL;
    if (!contactEmail) {
      return NextResponse.json({ error: "E-mail de destino não configurado." }, { status: 500 });
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [contactEmail], 
      subject: `Nova mensagem de contato de ${name}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Ocorreu um erro ao enviar a mensagem." }, { status: 500 });
  }
}