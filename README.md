Django and React starter app configured for Heroku and S3. Tutorials and documentation on [learndjangoreact.com](https://learndjangoreact.com). Watch or follow [@jfornear](https://twitter.com/jfornear) for major updates.

### Installation

Install python dependencies:

```
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
```

Create a `.env` file:

```
SECRET_KEY = '<django_secret_key>'
AWS_ACCESS_KEY_ID = '<aws_access_key_id>'
AWS_SECRET_ACCESS_KEY = '<aws_secret_access_key>'
REDIS_URL = 'redis://localhost:6379'
SENDGRID_API_KEY = '<sendgrid_api_key>'
```

Run Django server locally:

```
cd parakeet
python manage.py runserver 0.0.0.0:8000
```

Install npm depencies:

```
npm install --legacy-peer-deps
```

Run React app locally:
```
npm run watch
```

### Deployment

Build React app for Heroku:
```
npm run build-prod
```

Deploy to Heroku:
```
git push heroku main
```

Set Heroku environment variables:
```
heroku config:set SECRET_KEY='<django_secret_key>'
heroku config:set IS_PRODUCTION='True'
heroku config:set AWS_ACCESS_KEY_ID='<aws_access_key_id>'
heroku config:set AWS_SECRET_ACCESS_KEY='<aws_secret_access_key>'
heroku config:set SENDGRID_API_KEY = '<sendgrid_api_key>'
```
