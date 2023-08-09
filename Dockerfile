FROM node:16
WORKDIR /usr/src/app
COPY . .
RUN ls > list
RUN yarn install --immutable --immutable-cache --check-cache
RUN yarn build
#RUN rm -rf `cat list` && rm -rf list
USER node
CMD ["yarn", "start:prd"]
