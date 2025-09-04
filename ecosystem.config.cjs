module.exports = {
  apps: [
    {
      name: 'TMP-COMPRO-DEV',
      port: '3000',
      script: './.output/server/index.mjs'
    },
    {
      name: 'TMP-COMPRO-PROD',
      port: '8000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.prod/server/index.mjs',
      env: {
        NODE_ENV: 'production',
        BASE_URL: 'https://tigasatumedika.com',
        GTAG_ID: 'G-NJ8M67RVNC'
      }
    }
  ]
}
