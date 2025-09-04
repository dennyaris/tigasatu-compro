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
        GTAG_ID: 'G-NJ8M67RVNC',
        NUXT_PUBLIC_API_BASE_URL: 'https://dash.tigasatu.id/api/v1/'
      }
    }
  ]
}
