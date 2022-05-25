web: gunicorn parakeet.wsgi --pythonpath=/app/parakeet
worker: cd parakeet && env PYTHONPATH=/app/parakeet celery -A parakeet worker -l info
