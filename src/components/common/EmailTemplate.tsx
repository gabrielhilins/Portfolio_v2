import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div>
      <h2>Nome: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Mensagem: {message}</h2>
    </div>
  );
}