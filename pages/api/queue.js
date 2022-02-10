export default async function handler(req, res) {
  let url = decodeURIComponent(req.url);

  let parts = url.split("?");
  url = parts[parts.length - 1];
  url = url.replace(/\+/g, "");
  let json = JSON.parse(url);

  const action = json.data.action;

  const output = {
    action: {
      gesture: json.data.action?.gesture,
      uuid: json.data.action?.uuid,
    },
    info: {
      view: {
        collection_xid: json.data.info.view.collection_xid,
        queue_mode: json.data.info.view.queue_mode,
      },
    },
    metadata: {
      xid: json.data.metadata.id,
    },
  };

  res.json(output);
}
