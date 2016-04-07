var logger = require('fluent-logger');
var config = require('../../config').Config;
var log4js = require('log4js');
var env = process.env.ENV;
var setting = config[env];

var logConfig = {
  host: setting.log.host,
  port: setting.log.port,
  timeout: setting.log.timeout,
  reconnectInterval: setting.log.reconnectInterval
};

log4js.addAppender(logger.support.log4jsAppender('NotifyMe', logConfig));

var log = log4js.getLogger('NotifyME');

module.exports.Log = log;