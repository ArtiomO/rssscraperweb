import { createClient } from 'redis';
import type { RedisClientType } from 'redis';

export let redisClient: RedisClientType;

(async () => {
  redisClient = createClient({ url: 'redis://localhost:6379/0' });
  redisClient.on('error', (error) => console.error(`Error : ${error}`));
  await redisClient.connect();
})();
