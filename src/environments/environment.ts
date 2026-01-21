// environment.ts
export const environment = {
  production: false,
  
  // authentication and DES API base URLs
  apiBaseUrl: 'http://localhost:8080/dap/api/v1.0/des',
  authBaseUrl: 'http://localhost:8080/dap/api/v1.0/auth',
  authLoginUrl: 'http://localhost:8080/dap/api/v1.0/auth/login',
  authStatusUrl: 'http://localhost:8080/dap/api/v1.0/auth/status',

  desStatusApiUrl: 'http://localhost:8080/dap/api/v1.0/des/status',
  desPromocodeApiUrl: 'http://localhost:8080/dap/api/v1.0/des/promoco?store='
};
