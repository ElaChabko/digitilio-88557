export const onRequestGet: PagesFunction = async () => {
  return new Response("OK /health (functions active)", { status: 200 });
};
