module.exports = {
  apps: [
    {
      name: 'TMP-COMPRO-PROD',
      port: '8000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './server/index.mjs',
      env: {
        NODE_ENV: 'production',
        BASE_URL: 'https://tigasatumedika.com',
        GTAG_ID: 'G-HCZC0XKVF9'
      }
    }
  ]
}
