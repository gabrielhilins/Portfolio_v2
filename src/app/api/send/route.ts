import { EmailTemplate } from '@/components/common/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['gabrielhilins@gmail.com'],
      subject: 'New Contact Form Submission',
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({ error: error.message || 'Failed to send email' }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}