module.exports = {
  domain: process.env.PUBLIC_URL || null,
  host: process.env.HOST || "http://127.0.0.1",
  port: process.env.PORT || 3000,
  persona_uri: process.env.PERSONA_URI || "https://webrtc.personatest.org",
  persona_verifier_uri: process.env.PERSONA_VERIFIER_URI || "https://webrtc.personatest.org/verify",
  idp_provider: 'https://webrtc.personatest.org',
  idp_protocol: 'browserid',
  idp_username: null,
  title: process.env.TINCAN_TITLE || "Tin Can",
  secretsauce: process.env.SECRETSAUCE || "super secret sauce"
};
