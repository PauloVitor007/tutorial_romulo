export function GET() {
  return new Response(JSON.stringify({ status: 'ok', message: 'Servidor saudável! 🐳' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
