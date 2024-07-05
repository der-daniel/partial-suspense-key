export const get = async <Response>(url: string) => {
  try {
    const res = await fetch(url, { cache: "no-store" });
    const json = await res.json();
    return json as Response;
  } catch (e) {
    throw new Error("fetch get error");
  }
};
