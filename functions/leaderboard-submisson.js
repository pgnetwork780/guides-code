export default {
  async fetch(request, env) {
    const INTERNAL_KEY = env.INTERNAL_KEY;
    const incomingKey = request.headers.get("X-Internal-Auth");
    if (incomingKey !== INTERNAL_KEY) {
      return new Response("Forbidden", { status: 403 });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const formData = await request.formData();
    const playerName = formData.get("playerName");
    const leaderboards = formData.getAll("leaderboards");
    const contact = formData.getAll("contact");
    const notes = formData.getAll("notes");
    const images = formData.getAll("image");

    const response = {
      playerName,
      leaderboards,
      contact,
      notes,
      images: images.map(file => ({
        name: file.name,
        type: file.type,
        size: file.size
      }))
    };

    return new Response(JSON.stringify(response), {
      headers: { "Content-Type": "application/json" }
    });
  }
};