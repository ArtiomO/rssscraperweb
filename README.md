# Rss scraper web

    Rss scraper web interface.
    Service created as portfolio project.
    Service uses oauth authentication with oauth server. Check oauthcallback.ts file under api folder.


# Docker

Server listening on port 5000 inside container.

Build:

    podman build -t rss-scraper:0 .
    
# HOW TO

    Create server container:

        podman create -p 3000:3000 --name scraperweb  --network=local \
            -e NEXT_TELEMETRY_DISABLED=1 \
            -e OAUTH_CALLBACK_URL=http://localhost:3000/api/oauthcallback \
            -e OAUTH_CLIENT_ID=test-client-id \
            -e OAUTH_CLIENT_SECRET=test-client-secret \
            -e ENCRYPTION_KEY=8f45fe20a9837c344260b969e359010cbbb6402fecb06220e044c9a731d1e376 \
            -e NODE_ENV=production \
            -e FRONTCHANNEL_OAUTH_API_URL=http://localhost:8090/api/ \
            -e BACKCHANNEL_OAUTH_API_URL=http://oauth:8090/api/ \
            -e SCRAPER_API_URL=http://scraper:5000/api/ \
            -e REDIS_HOST=redis scraperweb:0

    Launch server:

        podman start scraperweb
