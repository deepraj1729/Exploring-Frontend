# A React APP for fetching Food Recipes:
Latest Deployment link: *https://food-recipe-react-app.herokuapp.com/*

## Setup UI
Clone this repo:

    git clone https://github.com/deepraj1729/Food-Recipe-React-App.git

Setup the UI:
- Using  [*Node*](#Using-Node)
- Using [*Docker*](#Using-Docker)
- Using [*Docker-Compose*](#Using-Docker-Compose)


### Using-Node

Pre-Requisites:
- "NODE_VERSION": "^16.13.0"
- "NPM_VERSION": "^8.1.0"
- "REACT_VERSION": "^17.0.1"


1. To install React globally (remove -g if locally)
    
        npm i create-react-app -g

2. Install the required packages from ***package.json***

        npm i


3. To Run the app :
    
        npm start

3. The website will run the development server in your system , Tadah!
4. It uses an API which user can call 5 get requests/min 


### Using-Docker

Pre-requisites:
- Docker Version: "20.10.11"
- Use *WSL2-backend Docker Desktop* for Windows users only

Docker Build:
- Build using the ***Dockerfile***

        docker build -t food-recipe-react-app .

- Check the newly created image with this command:

        docker images

Docker Run:
- Run the image to create the container:

        docker run -p 3000:80 food-recipe-react-app

- Auto-delete container after running:

        docker run --rm -it --name food-recipe-react-app -p 3000:3000 food-recipe-react-app

- Sync */app/src* inside container with local */src* (bind-mount)

        docker run --rm -it --name  food-recipe-react-app -p 3000:3000 -v $(pwd)/src:/app/src food-recipe-react-app

- Setup bind mount as Read-Only *(ro:)*:

        docker run --rm -it --name  food-recipe-react-app -p 3000:3000 -v $(pwd)/src:/app/src:ro food-recipe-react-app


## Using-Docker-Compose

1. For Dev Build:
- Build and run container using docker-compose from docker-compose.yml:

        docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build

2. For Production build:

        docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build

- Kill the container using docker-compose:

        docker-compose down



## Deployment for Production:

Using heroku for deployment (container registry):

    heroku login

    heroku container:login

    heroku create food-recipe-react-app

    git remote add docker https://git.heroku.com/food-recipe-react-app.git

    heroku container:push web --remote docker

    heroku container:release web --remote docker

    heroku open --remote docker

