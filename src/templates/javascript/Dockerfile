ARG NODE_VERSION=24-bookworm-slim
FROM node:${NODE_VERSION}

WORKDIR /app

ENV NODE_ENV=production

RUN apt-get update && \
    apt-get install -y --no-install-recommends curl && \
    rm -rf /var/lib/apt/lists/*

RUN adduser --system --disabled-password appuser

COPY package*.json ./

RUN npm ci --include=prod

COPY --chown=appuser:appuser src/ ./src

USER appuser

EXPOSE 8000

CMD ["node", "src/server.js"]
