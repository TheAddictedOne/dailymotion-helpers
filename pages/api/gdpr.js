export default function handler(req, res) {
  res.json({
    reader_gdpr_flag: req.query.reader_gdpr_flag,
    reader_gdpr_consent: req.query.reader_gdpr_consent,
    gdpr_binary_consent: req.query.gdpr_binary_consent,
    gdpr_comes_from_infopack: req.query.gdpr_comes_from_infopack,
  });
}
