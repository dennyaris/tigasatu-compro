module.exports = {
  apps: [
    {
      name: 'TMP-COMPRO',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
