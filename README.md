# README.md

## About Amorr
Amorr is a web application that serves as an online platform providing users with the luxury of choosing receiving various services such as haircuts, manicures, massages, makeup, and more in the comfort of their home.

## Problems that Amorr solves
Amorr provides a convenient way to find and have beauty services provided to people who:
1. Do not have the time (Scheduling issues or Traffic) and/or
2. Do not have the means of transportation and/or
3. Do not know about the quality of service

## Tools used in Development
- Frontend: React (Installation guide [here](https://reactjs.org/docs/getting-started.html))
- Backend Database: MySQL (Installation guide [here](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/))
- Connector: Flask (Installaton guide [here for Flask](https://flask.palletsprojects.com/en/2.1.x/installation/) and [here for Python](https://www.python.org/downloads/))

## Guideline to use Amorr
Clone down this repository by running 
```sh
git clone https://github.com/UTSCCSCC01/finalprojects22-stackato-studio.git
```

Install Flask with pip

```sh
pip install Flask
```
```sh
python app.py
```

Then, you will need [`node`](https://nodejs.org/en/) and `npm` installed globally on your machine.  

To install npm, run the following commands

```sh
node -v
```
```sh
npm -v
```

MySQL Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)

```sh
npm install mysql
```

Sometimes it may also ask you to install the latest version from Github to check
if a bugfix is working. In this case, please do

```sh
npm install mysqljs/mysql
```
This project uses yarn to handle dependencies, to install yarn run

```sh
npm install -g yarn
```  

To install all the necessary JavaScript packages for the frontend

```sh
yarn install
```  

To start the Server

```sh
npm start
```  

To Visit App

```sh
localhost:3000/amorr
```

## Development Team
Amorr is currently being developed by a Stackato Studio:
1. Efkan Serhat Goktepe
2. Jumana Fanous
3. Annanya Sharma
4. Shannon Budiman
5. Mir Safwat Ayser
6. Theora Gavrila Pui
7. Christopher Nathanael

## Development Process
Development follows the [Scrum Agile Development Methodology](https://www.scrum.org/resources/what-is-scrum) with Efkan Serhat Goktepe as our Scrum Master

## Workflow
We follow the git flow with 2 types of branches: the development branch and the feature branch

## Branch naming convention
- Development Branches correspond to sprints thus would be named __"development-*sprint#*"__ (example: "development-sprint2")
- Feature Branches would be named __"STAC-##-feature-*clear and concise feature description*"__ (example: "STAC-22-feature-signup-page")

## Measuring Project and Tasks
- Jira Boards are used to keep track of tasks and overall progress

## Open Source Contributing
- If you have a suggestion that would make this better, please fork the repo and create a pull request.
- Open a new issue with the label "Open Source Enhancement: " in the beginning.

Steps:
1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request
