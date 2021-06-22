server {
    listen 80;
    listen [::]:80;
    server_name loganawesome.com www.loganawesome.com;
}

server {
    server_name loganawesome.com www.loganawesome.com;

    location = /favicon.ico { access_log off; log_not_found off; }

    location / {
        include proxy_params;
        proxy_pass http://unix:/home/src/portfolio.sock;
    }

    location /staticfiles/ {
        alias /home/src/static/;
    }
}