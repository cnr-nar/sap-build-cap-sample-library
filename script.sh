cf api https://api.cf.us10-001.hana.ondemand.com
cf login
npm update --package-lock-only
npm set registry=https://registry.npmjs.org/
# build the service locally
mbt build -t gen --mtar mta.tar
# deploy the service to the BTP space
cf deploy gen/mta.tar
# generate the openAPI spec for the service, used to create the Action project
cds compile srv --service all -o docs --to openapi