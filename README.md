# Basic Angular frontend Frontend application

## CLONE REPO

```
git clone https://github.com/lazy-ants/angular4-application-quick-start.git
cd portal-frontend
```

## RUN VIA DOCKER

- run in dev mode

```
docker-compose up -d --build
docker exec -ti ng-app_nodejs npm start
```

- run in prod mode

```
docker-compose up -d --build
docker exec -ti ng-app_nodejs npm run prod
```

- run e2e protractor tests (Node.js v6.10.2 is required)

```
docker-compose up -d --build
docker exec -ti ng-app_nodejs npm run prod
cd project/application && npm run pree2e && npm run e2e
```

- run Karma tests (Node.js v6.10.2 is required)

```
docker-compose up -d --build
docker exec -ti ng-app_nodejs npm run prod
cd project/application && npm run test
```
