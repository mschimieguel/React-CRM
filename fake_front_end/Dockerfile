FROM node:16.13.2
COPY package.json ./
RUN rm -f package-lock.json
RUN rm -rf node_modules
RUN npm cache clean --force && npm install
COPY package-lock.json ./
RUN npm install --silent --only=production
RUN mkdir /react-ui && mv ./node_modules ./react-ui

WORKDIR /react-ui

# add app
COPY . ./

# start app
CMD ["npm", "start"]
