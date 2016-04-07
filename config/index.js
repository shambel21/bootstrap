exports.Config = {

  production: {},
  test: {
    log: {
      host: '192.168.99.100',
      port: 24224,
      timeout: 3.0,
      reconnectInterval: 600000 // 10 minutes
    }
  }
};
