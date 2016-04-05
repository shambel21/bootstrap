FROM readytalk/nodejs

WORKDIR /webapp

ADD package.json /webapp/

RUN npm install

ADD . /webapp

EXPOSE 8500

ENTRYPOINT ["node", "app.js"]