# Setup UI
- Using  [*Node*](#Using-Node)
- Using [*Docker*](#Using-Docker)

## Using-Node

Pre-Requisites (in-case there is any dependency issue):
- "NODE_VERSION": "16.13.0",
- "NPM_VERSION": "8.1.0",

Install packages locally inside newsapp/ folder
        
        npm i

## Using-Docker
- Build using Dockerfile:
      
        docker build -t newsapp .


- Check the newly created image:
        
        docker images

- Run the image in the Container:   

        docker run --rm -it --name newsapp -p 3000:3000 newsapp
