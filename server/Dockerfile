FROM python:3.8
RUN apt-get update -y && apt-get install -y python-pip python-dev
COPY ./requirements.txt /app/requirements.txt
WORKDIR /app
RUN python3 -m pip install flask flask-cors
COPY . /app
ENTRYPOINT [ "python3" ]
CMD [ "app.py" ]
