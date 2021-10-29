This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Docker build image
 `docker build -t aveti-react-docker-starter` 

### Docker run container
 `docker run -it -p 3000:3000 aveti-react-docker-starter`

### Docker Volume run container
 `docker run -it -p 3000:3000  -v PWD:/usr/src/app -v /usr/src/app/node_modules -e CHOKIDAR_USEPOLLING=true aveti-react-docker-starter` 

### Docker compose build image
`docker-compose build`  

### Docker compose run container
`docker-compose up` 

### Docker compose run container in detached mode
`docker-compose up -d`

### Docker compose check running container status
`docker ps`

### Docker compose check running container status
`docker ps` 

