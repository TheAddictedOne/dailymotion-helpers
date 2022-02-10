export default async function handler(req, res) {
  let url = decodeURIComponent(req.url);

  let parts = url.split("?");
  url = parts[parts.length - 1];
  url = url.replace(/\+/g, "");
  let json = JSON.parse(url);

  const output = {
    action: {
      gesture: json.data.action?.gesture || null,
      uuid: json.data.action?.uuid || null,
    },
    info: {
      view: {
        collection_xid: json.data.info.view.collection_xid || null,
        queue_mode: json.data.info.view.queue_mode || null,
      },
    },
    metadata: {
      xid: json.data.metadata.id || null,
    },
  };

  res.json(output);
}
