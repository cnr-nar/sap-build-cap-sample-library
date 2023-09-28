# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch` 
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.


## Extra Package to Install
npm i passport
npm i @sap/xssec

## To Create xs-security.json
cds compile srv/ --to xsuaa > xs-security.json <We need to use cmd or bash>

## TO ADD Auth
cf login
cf create-service xsuaa application sap-build-cap-sample-library-auth-c xs-security.json

## To Bind Service We Created
cf bind-service sap-build-cap-sample-library-srv sap-build-cap-sample-library-auth

## Restage App Again
cf restage sap-build-cap-sample-library-srv