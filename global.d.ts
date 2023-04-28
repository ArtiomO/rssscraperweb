namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    OAUTH_CALLBACK_URL: string;
    OAUTH_CLIENT_ID: string;
    OAUTH_CLIENT_SECRET: string;
    ENCRYPTION_KEY: string;
    FRONTCHANNEL_OAUTH_API_URL: string;
    BACKCHANNEL_OAUTH_API_URL: string;
    REDIS_HOST: string;
    SCRAPER_API_URL: string;
  }
}
