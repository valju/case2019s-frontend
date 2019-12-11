FROM node:alpine
WORKDIR /usr/src/case2019s-frontend

COPY package*.json ./
COPY tslint.json ./
RUN npm install
RUN npm install axios
RUN npm install react-router-dom
RUN npm install redux react-redux redux-thunk
RUN npm  install moment
RUN npm install --save-dev --save-exact prettier
RUN npm install --save-dev cross-env eslint-config-airbnb eslint-config-prettier eslint-plugin-cypress eslint-plugin-prettier

COPY . .
EXPOSE 8888
CMD ["npm","start"]
