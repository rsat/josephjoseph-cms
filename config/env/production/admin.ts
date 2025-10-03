export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  url: env('PUBLIC_URL') + '/admin',
});
