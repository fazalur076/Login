# Login
Sign-in, Sign-up backend
## How to request
#### json format 
**request**
/api/signup - url
`[
"name":"name",
"email":"email@gmail.com",
"role":"role",
"password":"password"
]`
/api/signin - url
`[
"email":"email@gmail.com",
"password":"password"
 ]`
 
 **IMPORTANT**
 create .env file in home directory and add the following
 `DB_URL=xxxxxdb_urlxxxxx \n
 SECRET_KEY=anything you want here
 `
### Technologies Used
- express
- bcrypt
- cors
- jsonwebtoken
- http-errors
- dotenv
- knex
