ARG NODE_VERSION=24-bookworm-slim
FROM node:${NODE_VERSION} AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:${NODE_VERSION}

WORKDIR /app

ENV NODE_ENV=production

RUN apt-get update && \
    apt-get install -y --no-install-recommends curl && \
    rm -rf /var/lib/apt/lists/*

RUN adduser --system --disabled-password appuser

COPY package*.json ./

RUN npm ci --include=prod

COPY --from=builder --chown=appuser:appuser /app/dist ./dist

USER appuser

EXPOSE 8000

CMD ["node", "dist/src/server.js"]
