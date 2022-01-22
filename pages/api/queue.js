export default async function handler(req, res) {
  let url = decodeURIComponent(req.url);

  let parts = url.split("?");
  url = parts[parts.length - 1];
  url = url.replaceAll("+", "");
  let json = JSON.parse(url);

  res.json({
    queue_mode: json.data.info.view.queue_mode,
    collection_xid: json.data.info.view.collection_xid,
  });
}
