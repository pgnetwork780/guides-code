export async function onRequestPost(context) {
  const incomingFormData = await context.request.formData();

  // FIX: Remove duplicate https://
  const WORKER_URL = "https://webhook-manager.craftersmcguides.workers.dev/leaderboard";

  const response = await fetch(WORKER_URL, {
    method: "POST",
    headers: {
      "X-Internal-Auth": context.env.INTERNAL_KEY
    },
    body: incomingFormData
  });

  return response;
}