# Connect API and database to the app

## Model the data with GraphQL transform

```sh
% amplify add api
? Select from one of the below mentioned services: GraphQL
? Here is the GraphQL API that we will create. Select a setting to edit or continue Continue
? Choose a schema template: Single object with fields (e.g., “Todo” with ID, name, description)

⚠️  WARNING: your GraphQL API currently allows public create, read, update, and delete access to all models via an API Key. To configure PRODUCTION-READY authorization rules, review: https://docs.amplify.aws/cli/graphql/authorization-rules

✅ GraphQL schema compiled successfully.

Edit your schema at /Users/victordias/Dvpt/PROJECTS/mmb-demos.angular-amplify-crud/amplify/backend/api/ngamplifycrud/schema.graphql or place .graphql files in a directory at /Users/victordias/Dvpt/PROJECTS/mmb-demos.angular-amplify-crud/amplify/backend/api/ngamplifycrud/schema
✔ Do you want to edit the schema now? (Y/n) · no
✅ Successfully added resource ngamplifycrud locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
%
```

## Creating the API with database

```sh
% amplify push
⠦ Fetching updates to backend environment: dev from the cloud.✅ GraphQL schema compiled successfully.

Edit your schema at /Users/victordias/Dvpt/PROJECTS/mmb-demos.angular-amplify-crud/amplify/backend/api/ngamplifycrud/schema.graphql or place .graphql files in a directory at /Users/victordias/Dvpt/PROJECTS/mmb-demos.angular-amplify-crud/amplify/backend/api/ngamplifycrud/schema
✔ Successfully pulled backend environment dev from the cloud.

⠧ Building resource api/ngamplifycrud
⠋ Building resource api/ngamplifycrud✅ GraphQL schema compiled successfully.

Edit your schema at /Users/victordias/Dvpt/PROJECTS/mmb-demos.angular-amplify-crud/amplify/backend/api/ngamplifycrud/schema.graphql or place .graphql files in a directory at /Users/victordias/Dvpt/PROJECTS/mmb-demos.angular-amplify-crud/amplify/backend/api/ngamplifycrud/schema

    Current Environment: dev
    
┌──────────┬───────────────┬───────────┬───────────────────┐
│ Category │ Resource name │ Operation │ Provider plugin   │
├──────────┼───────────────┼───────────┼───────────────────┤
│ Api      │ ngamplifycrud │ Create    │ awscloudformation │
└──────────┴───────────────┴───────────┴───────────────────┘
✔ Are you sure you want to continue? (Y/n) · yes

✅ GraphQL schema compiled successfully.

Edit your schema at /Users/victordias/Dvpt/PROJECTS/mmb-demos.angular-amplify-crud/amplify/backend/api/ngamplifycrud/schema.graphql or place .graphql files in a directory at /Users/victordias/Dvpt/PROJECTS/mmb-demos.angular-amplify-crud/amplify/backend/api/ngamplifycrud/schema
⠦ Building resource api/ngamplifycrud
⠏ Building resource api/ngamplifycrud

✅ GraphQL schema compiled successfully.

Edit your schema at /Users/victordias/Dvpt/PROJECTS/mmb-demos.angular-amplify-crud/amplify/backend/api/ngamplifycrud/schema.graphql or place .graphql files in a directory at /Users/victordias/Dvpt/PROJECTS/mmb-demos.angular-amplify-crud/amplify/backend/api/ngamplifycrud/schema
? Do you want to generate code for your newly created GraphQL API Yes
? Choose the code generation language target angular
? Enter the file name pattern of graphql queries, mutations and subscriptions src/graphql/**/*.graphql
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions Yes
? Enter maximum statement depth [increase from default if your schema is deeply nested] 2
? Enter the file name for the generated code src/app/API.service.ts

Deployment completed.
Deploying root stack ngamplifycrud [ ---------------------------------------- ] 0/2
	amplify-ngamplifycrud-dev-165… AWS::CloudFormation::Stack     UPDATE_IN_PROGRESS             Fri Jun 30 2023 19:14:31…     
	apingamplifycrud               AWS::CloudFormation::Stack     CREATE_IN_PROGRESS             Fri Jun 30 2023 19:14:34…     
Deployed api ngamplifycrud [ ======================================== ] 6/6
	GraphQLAPI                     AWS::AppSync::GraphQLApi       CREATE_COMPLETE                Fri Jun 30 2023 19:14:40…     
	GraphQLAPINONEDS95A13CF0       AWS::AppSync::DataSource       CREATE_COMPLETE                Fri Jun 30 2023 19:14:43…     
	GraphQLAPIDefaultApiKey215A6D… AWS::AppSync::ApiKey           CREATE_COMPLETE                Fri Jun 30 2023 19:14:43…     
	GraphQLAPITransformerSchema3C… AWS::AppSync::GraphQLSchema    CREATE_COMPLETE                Fri Jun 30 2023 19:14:54…     
	Player                         AWS::CloudFormation::Stack     CREATE_COMPLETE                Fri Jun 30 2023 19:15:58…     
	CustomResourcesjson            AWS::CloudFormation::Stack     CREATE_COMPLETE                Fri Jun 30 2023 19:16:10…     

✔ Generated GraphQL operations successfully and saved at src/graphql
✔ Code generated successfully and saved in file src/app/API.service.ts
Deployment state saved successfully.

GraphQL endpoint: https://ujg737iaezdhxectlmn2u34p3q.appsync-api.eu-west-1.amazonaws.com/graphql
GraphQL API KEY: da2-bsb2dm363vexxffkfsnae7dtwu

GraphQL transformer version: 2
%
```

Once the deployment is complete, the CLI will create a new directory in `src/graphql` with all of the GraphQL operations you will need for your API. The CLI also created an `API.service.ts` file in the `app` directory

```sh
% amplify push
⠸ Fetching updates to backend environment: dev from the cloud.
⠹ Fetching updates to backend environment: dev from the cloud.✅ GraphQL schema compiled successfully.

Edit your schema at /Users/victordias/Dvpt/PROJECTS/mmb-demos.angular-amplify-crud/amplify/backend/api/ngamplifycrud/schema.graphql or place .graphql files in a directory at /Users/victordias/Dvpt/PROJECTS/mmb-demos.angular-amplify-crud/amplify/backend/api/ngamplifycrud/schema
✔ Successfully pulled backend environment dev from the cloud.

    Current Environment: dev
    
┌──────────┬───────────────┬───────────┬───────────────────┐
│ Category │ Resource name │ Operation │ Provider plugin   │
├──────────┼───────────────┼───────────┼───────────────────┤
│ Api      │ ngamplifycrud │ No Change │ awscloudformation │
└──────────┴───────────────┴───────────┴───────────────────┘

No changes detected
% 
```

## Connect frontend to API

https://docs.amplify.aws/start/getting-started/data-model/q/integration/angular/#connect-frontend-to-api