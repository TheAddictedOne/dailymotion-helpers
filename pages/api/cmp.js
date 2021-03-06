export default async function handler(req, res) {
  let url = decodeURIComponent(req.url);

  let parts = url.split("?");
  url = parts[parts.length - 1];
  url = url.replace(/\+/g, "");
  let json = JSON.parse(url);

  res.json({ cmp: json.data.cmp });
}
