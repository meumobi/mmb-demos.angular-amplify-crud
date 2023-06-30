# SETUP

## Prerequisites

Before we begin, make sure you have the following installed:

- [Node.js] v12.x or later
- [npm] v5.x or later
- [git] v2.14.1 or later

If not you don't have Node.js and npm already installed, I recommend the read of [Download and install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

```sh
% node -v
v16.19.0
% npm -v 
8.19.3
% git -v
git version 2.37.1 (Apple Git-137.1)
```

### AWS CLI

[Install the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

```sh
$ curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
$ sudo installer -pkg AWSCLIV2.pkg -target /
installer: Package name is AWS Command Line Interface
installer: Installing at base path /
installer: The install was successful.
$
The files are installed to /usr/local/aws-cli, and a symlink is automatically created in /usr/local/bin.
$ which aws
/usr/local/bin/aws
$ aws --version aws-cli/2.12.2 Python/3.11.4 Darwin/21.6.0 exe/x86_64 prompt/off
```

### AWS Account

If you don't already have, you'll need to [create an AWS Account](https://portal.aws.amazon.com/billing/signup) in order to follow the steps outlined in this tutorial.

### Amplify CLI

To set up the Amplify CLI on your local machine, you have to configure it to connect to your AWS account.

If you already have an AWS profile with credentials on your machine (Default path: `~/.aws/credentials`), you can skip this step.

Check which profile is used by cli:

```sh
% aws configure list          
      Name                    Value             Type    Location
      ----                    -----             ----    --------
   profile                mmb-demos              env    ['AWS_PROFILE', 'AWS_DEFAULT_PROFILE']
access_key     ****************U73B shared-credentials-file    
secret_key     ****************oZQ6 shared-credentials-file    
    region                eu-west-1      config-file    ~/.aws/config
```

To [use a named profile](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html#cli-configure-files-using-profiles) use `AWS_PROFILE` env var. For ex. on MacOS `$ export AWS_PROFILE=mmb-demos`.

```sh
% npm install -g @aws-amplify/cli
% amplify -v
12.1.1
% amplify configure

Sign in to your AWS administrator account:
https://console.aws.amazon.com/
Press Enter to continue

Specify the AWS Region
? region:  eu-west-1
Specify the username of the new IAM user:
? user name:  amplify-IybTQ
Complete the user creation using the AWS console
https://console.aws.amazon.com/iam/home?region=eu-west-1#/users$new?step=final&accessKey&userNames=amplify-IybTQ&permissionType=policies&policies=arn:aws:iam::aws:policy%2FAdministratorAccess-Amplify

- Created user amplify-IybTQ
- Attached policy AdministratorAccess-Amplify to user amplify-IybTQ
- Created access key (********************) for user amplify-IybTQ with Secret Access key ****************************************

Press Enter to continue

Enter the access key of the newly created user:
? accessKeyId:  ********************
? secretAccessKey:  ****************************************
This would update/create the AWS Profile in your local machine
? Profile Name:  mmb-demos

Successfully set up the new user.
```

The amplify cli is installed on your User root, `~/.amplify`.

### Angular CLI

```sh
% npm install -g @angular/cli
% ng version
Angular CLI: 16.1.3
```

## Set up project

### Create a new Angular app

```sh
% ng new mmb-demos.angular-amplify-crud 
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS

% cd mmb-demos.angular-amplify-crud
```

### Create a new Amplify backend

```sh
% amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project ngamplifycrud
The following configuration will be applied:

Project information
| Name: ngamplifycrud
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: angular
| Source Directory Path: src
| Distribution Directory Path: dist
| Build Command: npm run-script build
| Start Command: ng serve

? Initialize the project with the above configuration? Yes
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS profile

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Please choose the profile you want to use mmb-demos
Adding backend environment dev to AWS Amplify app: d39ekhgd7pma19

Deployment completed.
Deployed root stack ngamplifycrud [ ======================================== ] 4/4
	amplify-ngamplifycrud-dev-165… AWS::CloudFormation::Stack     CREATE_COMPLETE                Thu Jun 29 2023 16:51:39…     
	AuthRole                       AWS::IAM::Role                 CREATE_COMPLETE                Thu Jun 29 2023 16:51:31…     
	UnauthRole                     AWS::IAM::Role                 CREATE_COMPLETE                Thu Jun 29 2023 16:51:31…     
	DeploymentBucket               AWS::S3::Bucket                CREATE_COMPLETE                Thu Jun 29 2023 16:51:37…     

✔ Help improve Amplify CLI by sharing non sensitive configurations on failures (y/N) · no
Deployment state saved successfully.
✔ Initialized provider successfully.
✅ Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify push" to deploy everything
% amplify status

    Current Environment: dev
    
┌──────────┬───────────────┬───────────┬─────────────────┐
│ Category │ Resource name │ Operation │ Provider plugin │
└──────────┴───────────────┴───────────┴─────────────────┘


% amplify console
https://eu-west-1.console.aws.amazon.com/amplify/home?region=eu-west-1#/d39ekhgd7pma19/YmFja2VuZA/dev
```

### Install Amplify library

```sh
% npm install --save aws-amplify @aws-amplify/ui-angular
+ aws-amplify@4.3.21
+ @aws-amplify/ui-angular@2.4.0

% npm start
```

The `@aws-amplify/ui-angular` package is a set of Angular components and an Angular provider which helps integrate your application with the AWS-Amplify library.

#### Importing the Amplify Angular UI Module

Add the Amplify Authenticator UI Module to `src/app/app.module.ts`:

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AmplifyAuthenticatorModule } from "@aws-amplify/ui-angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AmplifyAuthenticatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Connect API and database to the app

### Model the data with GraphQL transform

```sh
% amplify add api
? Select from one of the below mentioned services: GraphQL
? Here is the GraphQL API that we will create. Select a setting to edit or continue Continue
? Choose a schema template: Single object with fields (e.g., “Todo” with ID, name, description)

⚠️  WARNING: your GraphQL API currently allows public create, read, update, and delete access to all models via an API Key. To configure PRODUCTION-READY authorization rules, review: https://docs.amplify.aws/cli/graphql/authorization-rules

✅ GraphQL schema compiled successfully.

Edit your schema at /Users/vdias38/Dvpt/PROJECTS/amplify-app/amplify/backend/api/amplifyapp/schema.graphql or place .graphql files in a directory at /Users/vdias38/Dvpt/PROJECTS/amplify-app/amplify/backend/api/amplifyapp/schema
✔ Do you want to edit the schema now? (Y/n) · no
✅ Successfully added resource amplifyapp locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
%
```

### Creating the API with database

```sh
% amplify push
✔ Successfully pulled backend environment dev from the cloud.
⠴ Building resource api/amplifyapp

Current Environment: dev
┌──────────┬───────────────┬───────────┬───────────────────┐
│ Category │ Resource name │ Operation │ Provider plugin   │
├──────────┼───────────────┼───────────┼───────────────────┤
│ Api      │ amplifyapp    │ Create    │ awscloudformation │
└──────────┴───────────────┴───────────┴───────────────────┘
? Are you sure you want to continue? Yes

? Do you want to generate code for your newly created GraphQL API Yes
? Choose the code generation language target angular
? Enter the file name pattern of graphql queries, mutations and subscriptions src/graphql/**/*.graphql
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions Yes
? Enter maximum statement depth [increase from default if your schema is deeply nested] 2
? Enter the file name for the generated code src/app/API.service.ts
⠏ Updating resources in the cloud. This may take a few minutes...
...
✔ Generated GraphQL operations successfully and saved at src/graphql
✔ Code generated successfully and saved in file src/app/API.service.ts
✔ All resources are updated in the cloud

GraphQL endpoint: https://7nlloa5kubaqtecf3rongk44du.appsync-api.eu-west-1.amazonaws.com/graphql
GraphQL API KEY: da2-f7kj2ugirregrpn3xafx2mzv2i

GraphQL transformer version: 2
%
```

Once the deployment is complete, the CLI will create a new directory in `src/graphql` with all of the GraphQL operations you will need for your API. The CLI also created an `API.service.ts` file in the `app` directory

### Connect frontend to API

https://docs.amplify.aws/start/getting-started/data-model/q/integration/angular/#connect-frontend-to-api

[node.js]: https://nodejs.org/en/
[npm]: https://www.npmjs.com/
[git]: https://git-scm.com/

## Troubleshooting

### Error: No credentials, applicationId or region

Disable Analytics [amplify-js/issues/5918](https://github.com/aws-amplify/amplify-js/issues/5918)
