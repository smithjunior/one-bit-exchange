# OneBitExchange

---

## Build project

```bash
$ docker-compose build
```

## Create schema

```bash
$ docker-compose run --rm app bundle exec rails db:create db:migrate
```

## Install Js Modules

```bash
$ docker-compose run --rm app bundle exec rails webpacker:install
```


## Run App

```bash
$ docker-compose up
```
