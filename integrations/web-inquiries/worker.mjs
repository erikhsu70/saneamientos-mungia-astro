const site = 'https://saneamientosmungia.com';
const limits = { nombre: 120, correo: 254, telefono: 40, municipio: 120, asunto: 180, mensaje: 5000, origen: 500 };

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin');
    if (origin !== site) return new Response(null, { status: 403 });
    const headers = {
      'Access-Control-Allow-Origin': site,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Cache-Control': 'no-store',
      Vary: 'Origin',
    };
    const reply = (body, status) => Response.json(body, { status, headers });
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
    if (request.method !== 'POST') return reply({ ok: false }, 405);
    if (!env.APPS_SCRIPT_URL || !env.INGRESS_TOKEN) return reply({ ok: false }, 503);

    let input;
    try {
      const body = await request.text();
      if (body.length > 24000) return reply({ ok: false }, 413);
      input = JSON.parse(body);
    } catch {
      return reply({ ok: false }, 400);
    }
    if (!input || typeof input !== 'object' || input.empresa ||
        !/^[0-9a-f-]{36}$/i.test(input.id || '')) return reply({ ok: false }, 400);

    const entry = { id: input.id };
    for (const [name, limit] of Object.entries(limits)) {
      const value = typeof input[name] === 'string' ? input[name].trim() : '';
      if (value.length > limit) return reply({ ok: false }, 400);
      entry[name] = value;
    }
    if (!entry.nombre || !entry.mensaje || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entry.correo)) {
      return reply({ ok: false }, 400);
    }
    try {
      const source = new URL(entry.origen);
      entry.origen = source.origin === site ? site + source.pathname : site;
    } catch {
      entry.origen = site;
    }
    entry.asunto = entry.asunto.replace(/[\r\n]+/g, ' ');
    try {
      const response = await fetch(env.APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: env.INGRESS_TOKEN, entry }),
        signal: AbortSignal.timeout(18000),
      });
      const result = await response.json();
      return result.ok ? reply({ ok: true, id: entry.id }, 200) : reply({ ok: false }, 502);
    } catch {
      return reply({ ok: false }, 502);
    }
  },
};
