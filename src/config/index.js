const env = process.env.NODE_ENV || 'production'
const envConfig = {
  development: {
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/dc223547ec354fe9b41f7d40a563a3b2/api',
    jsonServer: 'http://localhost:9000/api'
  },
  test: {
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/dc223547ec354fe9b41f7d40a563a3b2/api/login'
  },
  production: {
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/dc223547ec354fe9b41f7d40a563a3b2/api/login'
  }
}

const config = {
  env,
  mock: true,
  ...envConfig[env],

}
export default config