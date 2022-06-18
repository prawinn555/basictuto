FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /app

# ADD command is older than COPY
# it can copy form url and unzip.
COPY filesToCopy "./"

RUN echo "show files in /app" ; ls -l *

RUN npm install --production
CMD [ "node", "server.js" ]