const isEnvHeroku = () => process.env.NODE_ENV === 'heroku';

const local_client_id = '134cf2f85b34e84d79c5';
const local_client_secret = 'ab9bb3f870fa3beeebebc4a470b2c6b7048c1b23';

const heroku_client_id = '242f26fee7e768e5b64e';
const heroku_client_secret = 'f93ae642d462e7ff80be4f0f2d04fbe98ef78a1a';

module.exports = {
  client_id: isEnvHeroku() ? heroku_client_id : local_client_id,
  client_secret: isEnvHeroku() ? heroku_client_secret : local_client_secret
};
