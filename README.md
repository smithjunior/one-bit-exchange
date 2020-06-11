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

```bash
$ docker-compose run --rm app yarn install
```

## Run App

```bash
$ docker-compose up
```

## Demo

[One Bit Exchange On Heroku](https://one-bit-exchange.herokuapp.com/)

## Challenges

### Fácil (obrigatório)

- [x] 1 – Customize a aparência do APP mudando o fundo, cores, textos e etc

### Médio (obrigatório)

- [x] 1 – Remova o Botão “CONVERTER” e converta automaticamente assim que o usuário entrar com uma quantidade no campo de texto.
- [x] 2 – Adicione um botão com um icone de inversão que quando clicado vai substituir a moeda escolhida no primeiro select pela do segundo.

### Difícil

- [x] 1 – Modifique a estrutura do APP para permitir que ele converta os valores para Bitcoin.
