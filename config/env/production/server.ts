export default ({ env }) => ({
  proxy: true,
  url: env('PUBLIC_URL'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
