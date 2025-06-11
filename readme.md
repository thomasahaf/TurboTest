# TurboTest 

Simple test of mercure and turbo-ux

# Docker

Start docker image with 

`docker-compose up -d`

# Prerequisites

Symfony framework: https://symfony.com/doc/current/setup.html 

Needs php 8.2 or higher.

composer https://getcomposer.org/download/

# Install dependencies

composer install

# Create database

php bin\console doctrine:migrations:migrate

# Start symfony 

Start symfony with `symfony server:start --no-tls`

`--no-tls` flag is important, mercure on dev does not respond on https.

# Check site on 

http://127.0.0.1:8000/book 

If you open 2 tabs of that page you should be able to see live updates
when creating or editing a book. 