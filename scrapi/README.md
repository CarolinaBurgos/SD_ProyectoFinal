### Ejecución normal
python manage.py runserver

### Docker

**Instalación del Docker**

docker-compose build

docker-compose up -d

**Listar containers**

docker container ls


**Ejecucion**

docker-compose run web python manage.py makemigrations

docker-compose run web python manage.py migrate

docker-compose run web python manage.py runserver



Abrir en el navegador: localhost:8000


**Eliminar containers e images**

docker stop "my-docker-machine"

docker system prune


**Enlace**

https://medium.com/@minghz42/docker-setup-for-django-on-mysql-1f063c9d16a0
