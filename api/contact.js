const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'prismasolucioneschaco@gmail.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Prisma Soluciones <onboarding@resend.dev>';

function sendJson(res, statusCode, success, message) {
  res.status(statusCode).json({ success, message });
}

function cleanInput(value) {
  return String(value || '')
    .trim()
    .replace(/[\r\n]+/g, ' ')
    .replace(/\s+/g, ' ');
}

function getPayload(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }

  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch (error) {
      return Object.fromEntries(new URLSearchParams(req.body));
    }
  }

  return {};
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendJson(res, 405, false, 'Método no permitido.');
  }

  if (!process.env.RESEND_API_KEY) {
    return sendJson(res, 500, false, 'Falta configurar RESEND_API_KEY en Vercel.');
  }

  const payload = getPayload(req);
  const name = cleanInput(payload.name);
  const phone = cleanInput(payload.phone);
  const email = cleanInput(payload.email);
  const message = String(payload.message || '').trim();
  const honeypot = String(payload.company_website || '').trim();
  const startedAt = Number(payload.form_started_at || 0);

  if (honeypot !== '') {
    return sendJson(res, 400, false, 'No pudimos procesar la solicitud.');
  }

  if (startedAt > 0) {
    const elapsedSeconds = (Date.now() - startedAt) / 1000;
    if (elapsedSeconds < 3 || elapsedSeconds > 7200) {
      return sendJson(res, 400, false, 'No pudimos validar el formulario. Recargá la página e intentá nuevamente.');
    }
  }

  if (!name || !phone || !email || !message) {
    return sendJson(res, 422, false, 'Completá todos los campos obligatorios.');
  }

  if (name.length < 2 || name.length > 80) {
    return sendJson(res, 422, false, 'Ingresá un nombre válido.');
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) {
    return sendJson(res, 422, false, 'Ingresá un email válido.');
  }

  if (!/^[0-9+\-\s().]{6,25}$/.test(phone)) {
    return sendJson(res, 422, false, 'Ingresá un teléfono válido.');
  }

  if (message.length < 10 || message.length > 2000) {
    return sendJson(res, 422, false, 'El mensaje debe tener entre 10 y 2000 caracteres.');
  }

  const linkCount = (message.match(/https?:\/\/|www\./gi) || []).length;
  if (linkCount > 2) {
    return sendJson(res, 422, false, 'El mensaje contiene demasiados enlaces.');
  }

  const emailBody = [
    'Nueva consulta recibida desde el sitio web:',
    '',
    `Nombre: ${name}`,
    `Teléfono: ${phone}`,
    `Email: ${email}`,
    '',
    'Mensaje:',
    message,
  ].join('\n');

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: email,
      subject: 'Nueva consulta desde Prisma Soluciones',
      text: emailBody,
    }),
  });

  if (!resendResponse.ok) {
    let providerMessage = 'No pudimos enviar tu consulta en este momento.';

    try {
      const errorData = await resendResponse.json();
      if (errorData && errorData.message) {
        providerMessage = errorData.message;
      }
    } catch (error) {
      // Keep the generic message when the provider does not return JSON.
    }

    return sendJson(res, 502, false, providerMessage);
  }

  return sendJson(res, 200, true, 'Tu consulta fue enviada correctamente. Te responderemos a la brevedad.');
};
