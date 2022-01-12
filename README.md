# Loganawesome.com

A website to showcase Logan's skills and projects!

Since making this website I have learned more about CSS, HTML, Javascript, and React.
A future iteration of the site would use react, instead of Django. 

# Setup

Navigate to ./src

> cd src

Create virtual environment (**Always run in virtual environment**)

> python3 -m venv env 

Activate environment

> . env/bin/activate

Install requirements

> pip install -r requirements.txt

Create src/settings.ini & define env variables

running locally? copy/paste to setting.ini
> [DEFAULT]<br>DJANGO_ALLOWED_HOSTS=*<br>SECRET_KEY=SECRET_KEY<br>DEBUG=1

Create & migrate database migrations

> python manage.py makemigrations

> python manage.py migrate

run 

> python manage.py runserver
