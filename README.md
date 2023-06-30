# Angular Amplify CRUD

The aim of this project is to discover/test Analytics solution of AWS. I'm familiar w/ Google Analytics, but I didn't find a similar solution on AWS-world. But it seems I can reach same level of insight by combining different AWS modules and set up a data stream from Kinesis Data Streams to QuickSight:

| ![Data stream from Kinesis Data Streams to QuickSight](https://miro.medium.com/max/1356/1*ErLceGXkOFoeSoWOVXQoeQ.png) |
| :-------------------------------------------------------------------------------------------------------------------: |
|                                  Data stream from Kinesis Data Streams to QuickSight                                  |

Amplify supports [Amazon Kinesis Data Streams](https://aws.amazon.com/kinesis/data-streams/) to deliver logs from the front-end to QuickSight.

1. **Kinesis Data Firehose delivery stream** delivers data to S3 through Kinesis Data Stream.
1. **AWS Glue** runs a crawler that gathers data from the S3 bucket.
1. Then you are ready to query the data from S3 through AWS Glue by **Athena**.
1. Visualise data on **QuickSight**.

Then I've decided to write a tutorial to guide you through [setting up an AWS backend and integrating that backend with your Angular web app](https://docs.amplify.aws/start/q/integration/angular/). You will create an app with a GraphQL API to store and retrieve your team players in a cloud database, as well as receive updates over a realtime subscription. Then we'll add some extra features to our app:

- [Analytics](https://docs.amplify.aws/lib/analytics/getting-started/q/platform/js/)
  - track user events (sessions, click, etc.)
  - get a Dashboard insights w/ QuickSight
- [Authentication](https://docs.amplify.aws/lib/auth/getting-started/q/platform/js/)
  - Connect Cognito to Pinpoint
- [In-app messaging](https://docs.amplify.aws/lib/in-app-messaging/overview/q/platform/js/)
- [AWS Lambda function w/ Serverless Framework](https://www.serverless.com/aws-lambda)

## Getting Started

- [docs/SETUP](docs/1-SETUP)

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be
```
Give the example
```

And repeat

```
until finished
```

### Running locally

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running tests

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Deployment

Add additional notes about how to deploy this on a live system

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Furthermore

* [DealwithData (yt) - End to End Simple Data Analytics Solution using AWS Services](https://www.youtube.com/watch?v=v1qdXQXMp2A)
* [AWS Amplify API / AnalyticsClass](https://aws-amplify.github.io/amplify-js/api/classes/analyticsclass.html)
* [Leveraging Amazon Pinpoint Analytics to Improve Application Performance and User Experience | AWS](https://www.youtube.com/watch?v=fSDQx5ardmI)
*-* [Data Analytics for Beginners from AWS Experts](https://www.youtube.com/watch?v=IofpKxNRnAE)
* [Web Dev Journey (yt)- Amplify - Analytics](https://www.youtube.com/watch?v=61vlNE4JeaM)
* [Daijiro Wachi (medium) - Improve UX by observability in front-end with Amplify and QuickSight](https://watilde.medium.com/improve-ux-by-observability-in-front-end-with-amplify-and-quicksight-e7083ec1913b)
* [docs.amplify.aws/lib/analytics](https://docs.amplify.aws/lib/analytics/getting-started/q/platform/js/)
* [docs.amplify.aws/start/getting-started/auth](https://docs.amplify.aws/start/getting-started/auth/q/integration/angular/)
