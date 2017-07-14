const environment = {
  development: {
    isProduction: false,
    apiUrl: 'http://stage.collegeshuttles.com'
  },
  production: {
    isProduction: true,
    apiUrl: 'http://stage.collegeshuttles.com'
  }
}[process.env.NODE_ENV || 'development'];

let AuthToken;

module.exports = Object.assign(
  {},
  environment
);
