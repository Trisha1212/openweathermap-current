<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [API Test](#APITest)
  - [Tech stacks](#tech-stacks)
  - [Setup](#setup)
    - [Dev Setup mocha and chai supertest](#dev-setup-mocha-and-chai-and-supertest)
    - [Running test cases](#running-test-cases)
    - [Folder structure]
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# APITest

API test : OpenWeatherMap (https://openweathermap.org/current)
- Check the basic functionality of API By city name.
- Currently one test is potentional bug 

## Tech stacks

- [`Mocha`](https://mochajs.org/)
- Chai for Assertion (http://chaijs.com/)
- supertest-as-promised(https://www.npmjs.com/package/supertest-as-promised)

## Setup

https://github.com/ASH-khan/notebook/wiki/JavaScript-Testing-Basics-with-Mocha-and-Chai
### Dev Setup nodejs and yarn
* install node
* Best Buy Dev Set up(https://github.com/bestbuy/api-playground/#getting-started)
```
brew update
brew install node
git clone the repo
cd till test dir
npm install
npm start
```
* Open localhost:3030 and verify the webpage is accessible
* [install yarn](https://yarnpkg.com/lang/en/docs/install/)
* install mocha chai and supertest-as-promised
Use yarn to install mocha chai and supertest-as-promised globally with:
```
npm install

```
This will install two command line tools, mocha chai and supertest-as-promised. Try running `mocha --version` to make sure it's working.
The Chai is a helper tool to for assertion of API response

### Running test specs

```
APP_ID=f3a6a630b3259fd00e07ff09d222c32e npm_package_config_host=http://api.openweathermap.org/data/2.5 mocha weatherMapIntegrationTest.js

```


### Folder structure

- Tests -  The tests will call functions from the API and Payload areas of the framework and be responsible for asserting responses.
- API -  HTTP requests are grouped based on the resource you are calling so if there are two resources called if the request changes it requires a single change to propagate through the framework.
- Payloads - Payloads that are required for requests and responses are stored in this area. The idea is similar to the API area in that one class is responsible for one payload that may be called multiple times. Again, this means if the payload changes it requires a single change to propagate through the framework.


````
├── README.md
├── api
│   ├── common.js
│   └── openWeatherMapCity.js
├── package.json
├── payloads
│   └── commonPayloads.js
└── test
    └── weatherMapIntegrationTest.js

````


### Bug 
- ErrorHandling: By city name passed as post method and it return response as 200 successful though it should return 405 [https://httpstatuses.com/405]
