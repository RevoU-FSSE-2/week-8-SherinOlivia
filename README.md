
# Week 8 Assignment Overview

For Week 8's Assignment, we are to create a simple REST API Server using Express.js, Typescript, and Node.js, and then deployed through Railway or Render or any other back-end deployment platform.

- Start the project by creating necessary folders: `mkdir controllers src data assets`
- And or files with: `touch app.ts .gitignore`, etc.
- Create a package.json file that will be used to describe your app: `npm init -y`
- Install all the needed dependencies (general): `npm i dotenv body-parser express ` 
- Install all the needed dependencies for development side (DevDependencies): `npm i -D @types/dotenv @types/express @types/nodes concurrently nodemon typescript`

## API Endpoints
<p align="center">
<a href="https://roofinancetracker-prod.up.railway.app/">roofinancetracker-prod.up.railway.app/</a>
</p>

| Name  | HTTP Method | Endpoint | 
| ----------- | ----------- | ----------- |
| **Homepage** | `GET` |[/](https://roofinancetracker-prod.up.railway.app/)
| **List All Transaction Data** | `GET` | [/transactions](https://roofinancetracker-prod.up.railway.app/transactions)
| **Get Transaction Data by ID** | `GET` | [/transactions/:id](https://roofinancetracker-prod.up.railway.app/transactions/1) |
| **Create New Transaction Data** | `POST` | [/transactions](https://roofinancetracker-prod.up.railway.app/transactions) |
| **Update Whole Transaction Data by ID** | `PUT` | [/transactions/:id](https://roofinancetracker-prod.up.railway.app/transactions/1) |
| **Update Transaction Type by ID** | `PATCH` | [/transactions/ttype/:id](https://roofinancetracker-prod.up.railway.app/transactions/ttype/1) |
| **Update Transaction Name by ID** | `PATCH` | [/transactions/tname/:id](https://roofinancetracker-prod.up.railway.app/transactions/tname/1) |
| **Update Transaction Detail by ID** | `PATCH` | [/transactions/tdetail/:id](https://roofinancetracker-prod.up.railway.app/transactions/tdetail/1) |
| **Update Transaction Amount by ID** | `PATCH` | [/transactions/tamount/:id](https://roofinancetracker-prod.up.railway.app/transactions/tamount/1) |
| **Delete Transaction Data by ID** | `DELETE` | [/transactions/:id](https://roofinancetracker-prod.up.railway.app/transactions/1) |


## Postman & Thunder Client

<p>Through Postman or Thunder Client, we will be able to test our API's routing and codes to ensure 
functionalities.</p> 

**Postman** 
: an API platform for building and using APIs

![postman-download](https://raw.githubusercontent.com/RevoU-FSSE-2/week-8-SherinOlivia/main/readmeImgs/postman-download.webp?token=GHSAT0AAAAAACDKQZ7GH4NM2WIJS5VHTU4GZGWRZ5Q)

1. To download postman, head to [**postman.com**](https://www.postman.com/downloads/)

![postman-overview](https://raw.githubusercontent.com/RevoU-FSSE-2/week-8-SherinOlivia/main/readmeImgs/postman-overview.webp?token=GHSAT0AAAAAACDKQZ7G4LSQB3MBRL7T4TN2ZGWR25Q)

<p>Although we don't have to create an account for Postman, creating one will allow us to access workspace, a space on the side where we can create our API requests.</p>

![postman-createaccount](https://raw.githubusercontent.com/RevoU-FSSE-2/week-8-SherinOlivia/main/readmeImgs/postman-login.webp?token=GHSAT0AAAAAACDKQZ7GVYF4YA2QQKMBEFUMZGWR2GA)

2. An example of neat workspace

![postman-workspace](https://raw.githubusercontent.com/RevoU-FSSE-2/week-8-SherinOlivia/main/readmeImgs/postman-workspace.webp?token=GHSAT0AAAAAACDKQZ7GILLZHSPQJWZZFIRCZGWR4DA)

**Thunder Client** 
: a lightweight GUI based Rest API Client Extension for Visual Studio Code

<p> An alternative to Postman, Thunder Client can be easily installed by going to `extensions` in VSCode.</p>

## Deployement through Railway

**Railway** 
: a Platform as a Service (PaaS) that offers a complete platform for building and delivering programs to the backend of the cloud. Which means <strong>Railway</strong> is one of the many options where we can deploy our back-end codes.

1. First, head to [**railway.app**](https://railway.app/), and click login with github account.
- ![railway-web](https://raw.githubusercontent.com/RevoU-FSSE-2/week-8-SherinOlivia/main/readmeImgs/railway-website.webp?token=GHSAT0AAAAAACDKQZ7HR6R4GCLCA5SCEJ6AZGWR6XA)
- ![railway-login](https://raw.githubusercontent.com/RevoU-FSSE-2/week-8-SherinOlivia/main/readmeImgs/railway-login.webp?token=GHSAT0AAAAAACDKQZ7GA5MMJS7YLTLWMWQGZGWR54Q)

2. Click New Project and the github repository that houses your backend sourcecode
![railway-newproject](https://raw.githubusercontent.com/RevoU-FSSE-2/week-8-SherinOlivia/main/readmeImgs/railway-newproject.webp?token=GHSAT0AAAAAACDKQZ7HDUVMKIKTDCDBNWQCZGWR6LQ)
![railway-projectrepo](https://raw.githubusercontent.com/RevoU-FSSE-2/week-8-SherinOlivia/main/readmeImgs/railway-projectrepo.webp?token=GHSAT0AAAAAACDKQZ7HP3SLC3D6SKVJOC32ZGWR6NA)

3. Railway will proceed to start building and deploying your project, when completed, you may set the web
![railway-domainname](https://raw.githubusercontent.com/RevoU-FSSE-2/week-8-SherinOlivia/main/readmeImgs/railway-domainname.webp?token=GHSAT0AAAAAACDKQZ7GJ7O7SKY4BWKXTN6GZGWR53A)

4. Your project is ready for use.
### Contact Me:

<img src="https://raw.githubusercontent.com/RevoU-FSSE-2/week-7-SherinOlivia/3dd7cdf0d5c9fc1828f0dfcac8ef2e9c057902be/assets/gmail-icon.svg" width="15px" background-color="none">[SOChronicle@gmail.com](mailto:SOChronicle@gmail.com) [Personal]

<img src="https://raw.githubusercontent.com/RevoU-FSSE-2/week-7-SherinOlivia/3dd7cdf0d5c9fc1828f0dfcac8ef2e9c057902be/assets/gmail-icon.svg" width="15px" background-color="none">[SOlivia@gmail.com](mailto:SOlivia198@gmail.com) [Work]

[![Roo-Discord](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/bddf1eca3ee3ad82db2f228095d01912bf9c3de6/assets/MDimgs/icons8-discord.svg)](https://discord.com/users/shxdxr#7539)[![Roo-Instagram](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/bddf1eca3ee3ad82db2f228095d01912bf9c3de6/assets/MDimgs/icons8-instagram.svg)](https://instagram.com/shxdxr?igshid=MzRlODBiNWFlZA==)[![Roo-LinkedIn](https://raw.githubusercontent.com/RevoU-FSSE-2/week-5-SherinOlivia/bddf1eca3ee3ad82db2f228095d01912bf9c3de6/assets/MDimgs/icons8-linkedin-circled.svg)](https://www.linkedin.com/in/sherin-olivia-07311127a/)