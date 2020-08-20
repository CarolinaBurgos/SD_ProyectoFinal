FROM python:3.6
ENV PYTHONUNBUFFERED 1
RUN mkdir /scrapi
WORKDIR /scrapi
ADD requirements.txt /scrapi/
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
ADD . /scrapi/