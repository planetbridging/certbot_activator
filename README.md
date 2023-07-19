# CERT BOT HELPER

Description of your project.

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/planetbridging/certbot_activator
   ```

2. To install certbot, copy-paste those lines in a terminal :

```shell
   sudo add-apt-repository ppa:certbot/certbot
```

```shell
   sudo apt-get update
```

```shell
   sudo apt-get install certbot
```

```shell
   certbot certonly --manual
```

(Y)es/(N)o: y
(Y)es/(N)o: y

Account registered.
Please enter the domain name(s) you would like on your certificate (comma and/or
space separated) (Enter 'c' to cancel): yourdomain.com

---

Create a file containing just this data:
somerandomstuff

And make it available on your web server at this URL:
http://yourdomain.com/.well-known/acme-challenge/somerandomlongstring

3. Open another terminal and create the file
4. Run the docker to host the file being hosted so it can grab the file

```shell
  docker-compose up
```
