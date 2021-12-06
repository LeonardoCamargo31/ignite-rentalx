### Conceito de modulos 
Modulos são pequenos blocos da nossa aplicação, não necessariamente uma entidade isola como um modulo, estamos trabalhando com categoria que é do carro, estamos trabalhando com especificação que é do carro, então criamos um modulo de carro, onde tudo que for relacionado com carro fique dentro desse modulo

### use cases
São basicamente a operações/funcionalidades que estamos fazendo

### singleton
Criar apenas uma instancia de uma classe, não ter a preocupação de criar mais de uma instancia.

### upload de arquivos com multer
Conceito de stream, assim podemos ler o arquivo por partes, como dizem por chunks, pensar como netflix, ele vai carregando por partes, ele não carrega o video todo, e assim role o video, ele faz a leitura por partes.

## Docker
Ferramenta para criação de containers, o Que "roda" localmente "roda" em produção, com o mesmo ambiente, com o mesmo SO compartilhando recursos da maquina host
- Containers ambiente isolado
- Imagens são instruções para criação de um container

FROM imagem

WORKDIR diretório onde fica nossas imagens

COPY package.json ./ o container vai pegar as dependencias e instalar

COPY . . copiar tudo para nossa raiz

CMD ["npm", "run", "dev"] comando pra inicializar aplicação

Criar imagem
➜ sudo docker build -t rentx .


Mapeamento da porta, a 3333 o docker procura o container na porta 3333
➜ docker run -p 3333:3333 rentx


Para acessar o container
➜ sudo docker exec -it cool_shtern /bin/bash
➜ root@90eaf6d7daf7:/usr/app# ls
Dockerfile  node_modules  package-lock.json  package.json  readme.md  src  tmp	tsconfig.json

Listar containers executando
docker ps

Listar todos containers
docker ps -a

Remover container, precisa parar container
docker rm idContainer

Iniciar container
docker start idContainer

Parar container
docker stop idContainer 

## Docker compose
Ele orquestra containers, assim consiga trabalhar com varios containers

services:
  app:
    build: . localização do dockerfile aquele que executamos docker build -t rentx .
    ports:
      - 3333:3333 mapeamento de portas
    volumes:
      - .:/usr/app da raiz para onde queremos enviar

Executar 
sudo docker-compose up

Parar
docker-compose stop

Remover tudo que foi criado
docker-compose down

Para subir e criar
docker-compose up

Ver logs
docker logs rentx

Observar log e ficar observando
docker logs rentx -f

## Banco de dados

- Drivers nativos:  Como o pacote `pg`, e fazer os comandos na mão, e a responsabilidade na nossa mão.

- Query builders: Como o caso do knex, mistura o sql puro com o conceito de js.

- ORM: MODEL <-> ORM <-> BANCO DE DADOS, assim transformando nosso model, em algo que o banco de dados entenda, e que cuida disso é o ORM, exemplo de ORM é o TypeORM, Sequelize.


### TypeORM

Instalação
npm i typeorm reflect-metadata

E o driver
npm i pg                      


