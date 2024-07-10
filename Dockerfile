FROM node:lts
LABEL authors="zeret"
WORKDIR /app
COPY . .

RUN corepack enable pnpm
RUN pnpm install
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "start", "-p", "3000", "-H", "0.0.0.0"]
