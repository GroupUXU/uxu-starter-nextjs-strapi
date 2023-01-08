module.exports = ({env}) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "hello@uxu.pl",
        defaultReplyTo: "hello@uxu.pl",
        testAddress: "hello@uxu.pl",
      },
    },
  }
});
