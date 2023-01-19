# path: ./Dockerfile.prod

FROM node:16
# Installing libvips-dev for sharp Compatibility
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY ./package.json ./
ENV PATH /app/node_modules/.bin:$PATH
RUN npm i
COPY . .
RUN yarn build
EXPOSE 1337
CMD ["npm", "run", "start"]
