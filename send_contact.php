<?php
declare(strict_types=1);

const TO_EMAIL = 'prismasolucioneschaco@gmail.com';
const SITE_NAME = 'Prisma Soluciones';

function wants_json(): bool
{
    return isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false;
}

function respond(bool $success, string $message, int $statusCode = 200): void
{
    http_response_code($statusCode);

    if (wants_json()) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode([
            'success' => $success,
            'message' => $message,
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    header('Content-Type: text/html; charset=UTF-8');
    $safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
    echo "<!doctype html><html lang=\"es\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Contacto</title></head><body><p>{$safeMessage}</p><p><a href=\"index.html#contact\">Volver al sitio</a></p></body></html>";
    exit;
}

function clean_input(string $value): string
{
    $value = trim($value);
    $value = str_replace(["\r", "\n"], ' ', $value);
    return preg_replace('/\s+/', ' ', $value) ?? '';
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Método no permitido.', 405);
}

$name = clean_input($_POST['name'] ?? '');
$phone = clean_input($_POST['phone'] ?? '');
$email = clean_input($_POST['email'] ?? '');
$message = trim((string) ($_POST['message'] ?? ''));
$honeypot = trim((string) ($_POST['company_website'] ?? ''));
$startedAt = (int) ($_POST['form_started_at'] ?? 0);

if ($honeypot !== '') {
    respond(false, 'No pudimos procesar la solicitud.', 400);
}

if ($startedAt > 0) {
    $elapsedSeconds = (time() * 1000 - $startedAt) / 1000;
    if ($elapsedSeconds < 3 || $elapsedSeconds > 7200) {
        respond(false, 'No pudimos validar el formulario. Recargá la página e intentá nuevamente.', 400);
    }
}

if ($name === '' || $phone === '' || $email === '' || $message === '') {
    respond(false, 'Completá todos los campos obligatorios.', 422);
}

if (strlen($name) < 2 || strlen($name) > 80) {
    respond(false, 'Ingresá un nombre válido.', 422);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 120) {
    respond(false, 'Ingresá un email válido.', 422);
}

if (!preg_match('/^[0-9+\-\s().]{6,25}$/', $phone)) {
    respond(false, 'Ingresá un teléfono válido.', 422);
}

if (strlen($message) < 10 || strlen($message) > 2000) {
    respond(false, 'El mensaje debe tener entre 10 y 2000 caracteres.', 422);
}

$linkCount = preg_match_all('/https?:\/\/|www\./i', $message);
if ($linkCount !== false && $linkCount > 2) {
    respond(false, 'El mensaje contiene demasiados enlaces.', 422);
}

$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safePhone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safeMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
$host = preg_replace('/[^a-z0-9.-]/i', '', $_SERVER['HTTP_HOST'] ?? 'localhost');
$replyName = addcslashes($name, "\"\\");

$subject = 'Nueva consulta desde Prisma Soluciones';
$body = "
Nueva consulta recibida desde el sitio web:

Nombre: {$safeName}
Teléfono: {$safePhone}
Email: {$safeEmail}

Mensaje:
{$safeMessage}
";

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: ' . SITE_NAME . ' <no-reply@' . $host . '>',
    'Reply-To: "' . $replyName . '" <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail(TO_EMAIL, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    respond(false, 'No pudimos enviar tu consulta en este momento. Intentá nuevamente más tarde.', 500);
}

respond(true, 'Tu consulta fue enviada correctamente. Te responderemos a la brevedad.');
