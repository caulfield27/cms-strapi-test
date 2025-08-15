FROM node:20-alpine AS builder

ENV http_proxy=http://192.168.145.3:3128
ENV https_proxy=http://192.168.145.3:3128
ENV NODE_TLS_REJECT_UNAUTHORIZED=0

WORKDIR /app

COPY package*.json ./
RUN npm config set strict-ssl false
RUN npm install --quiet

COPY . .
RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app /app
ENV NODE_ENV=production
EXPOSE 1337

CMD ["npm", "start"]