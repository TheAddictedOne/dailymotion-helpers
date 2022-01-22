/**
 * Extracting GDPR fields from Ad request
 * @param {string} req.url - URL encoded version of
 * "/api/gdpr?https://dmxleo.dailymotion.com/cdn/manifest/video/x7xgg57.m3u8?auth=<auth-key>&ps=1094x948&td=www.dailymotion.com&reader_gdpr_flag=1&reader_gdpr_consent=<consent-string>&gdpr_binary_consent=opt-in&gdpr_comes_from_infopack=0&reader_us_privacy=1---&vl=-1&ciid=1fq0q7rcg5qavf71mhp_VMAP_0_0&cidx=0&sidx=0&rap=0&vidIdx=0&vad=1&omn=0&imal=1
 */
export default function handler(req, res) {
  const qs = getQS(req.url);
  res.json({
    reader_gdpr_flag: qs.reader_gdpr_flag,
    reader_gdpr_consent: qs.reader_gdpr_consent,
    gdpr_binary_consent: qs.gdpr_binary_consent,
    gdpr_comes_from_infopack: qs.gdpr_comes_from_infopack,
  });
}

function getQS(encodedURL) {
  const result = {};
  let url = decodeURIComponent(encodedURL);

  // There are 2 "?": first one expected (/api/gdpr?), second one from query string to make a copy/paste easier
  let parts = url.split("?");
  url = parts[parts.length - 1];

  parts = url.split("&");
  parts.map((part) => {
    const [key, value] = part.split("=");
    result[key] = value;
  });

  return result;
}
