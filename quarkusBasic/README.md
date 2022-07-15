# Deploying Quarkus to Azure;

Welcome !!!

In this tuturial, we will deploy a Quarkus micro service on Microsoft Azure cloud.
The docker is based on GraalVM.
The service is compiled into the native platform code before deployment.

We will also show how to deploy the service on [platform.sh](https://platform.sh/).
It is a system that offers higher level services ( on top of Azure and other cloud providers such as OVH).


In this tutorial, we focus on the overall process 
(how to start the development until deployment).
It compliments to existing online tutorials on the Quarkus website, 
which provide details of each command and each part of code.

These official guides are very useful.

[Getting start with Quarkus](https://quarkus.io/get-started/)

[Using MongoDB with Quarkus](https://quarkus.io/guides/mongodb)

[Building a native image](https://quarkus.io/guides/building-native-image)

[Azure deployment](https://quarkus.io/guides/deploying-to-azure-cloud)

# Steps to follow

- Installing all software tools ( Quarkus, GraalVM, GCC compilers, Docker, Azure Client)

- Coding Java and testing.

The code is quite simple :).

- Generating the native docker image

This step is platform specifique (Linux, Windows, or Mac OS).
Many problems related to libraries can happen.
The machine should has enough memory ( I used 16 GB laptop.)

- Creating an account, Creating a container registry and deploy on Azure

# Configuring DB connection


Edit application.properties

Add this property

´´´
quarkus.mongodb.connection-string=mongodb+srv://userxxx:passwordxxx@your_cluster.gcp.mongodb.net
´´´



# Azure commands


These are my note of the commands i used.

All the explications are [here](https://quarkus.io/guides/deploying-to-azure-cloud).


The followings commands are used to prepare the cloud platform.
They need to be executed only one time
 ( creating a group, a registry).
Except login commands, we must use each time.

The registry name must be unique.

```bash

az group create --name mygroup --location eastus

az acr create --resource-group mygroup --name prawinn555 --sku Basic --admin-enabled true

az acr login --name prawinn555

az acr show -n prawinn555 --query loginServer

```

The followings commands are used to build a docker image and deploy it.
They need to be executed each time the application is updated.


```bash

# long execution !!!

./mvnw package -Dnative


 docker build -f src/main/docker/Dockerfile.native -t mygroup/mytutorial .

#For testing

docker run -i --rm -p 8080:80 mygroup/mytutorial


docker tag mygroup/mytutorial prawinn555.azurecr.io/mygroup/mytutorial


docker push prawinn555.azurecr.io/mygroup/mytutorial

az acr repository list -n prawinn555

az acr credential show --name prawinn555


az container create \
    --name prawinn555 \
    --resource-group mygroup \
    --image prawinn555.azurecr.io/mygroup/mytutorial \
    --registry-login-server prawinn555.azurecr.io \
    --registry-username prawinn555 \
    --registry-password <it is shown by previous command> \
    --dns-name-label prawinn555 \
    --query ipAddress.fqdn
	
	
az vm show -d -g mygroup -n prawinn555 --query publicIps -o ts



```


The result :

prawinn555.eastus.azurecontainer.io



# how to deploy the service on platform.sh

Coming soon.


