export const dynamic = "force-dynamic"; // defaults to auto

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, Math.ceil(time * 1000)));

export async function GET(request: Request) {
  await sleep(Math.random() * 8);
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  return Response.json({ key });
}
