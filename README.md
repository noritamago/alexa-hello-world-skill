# alexa-hello-world-skill
boiler template for Alexa skill development by rewriting https://github.com/amzn/alexa-skills-kit-js/tree/master/samples/helloWorld

## About

[Alexa SDK and sample](https://github.com/amzn/alexa-skills-kit-js) is written by ES5 and skill deployment isn't included [see this](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/deploying-a-sample-skill-to-aws-lambda#preparing-a-nodejs-sample-to-deploy-in-lambda).

This alexa-hello-world-skill intend to show

* write skill
* test skill
* deployment skill

with ES2015 and better developent pipeline.

## Install and Setup
```
npm install
```

## Write Skill

You just extends AlexaSkill class and write intent handling and how Alexa respond content to user.  
```
vi test/hello-world-skill.js
```

## Test Skill Code

We can conduct unit test to mimic Alexa Intent. Similar test is available in AWS Console,    
```
npm test
```
We write any test cased using [mocha](https://mochajs.org/)

## Deploy Skill Code to AWS

using [node-aws-lambda](https://github.com/ThoughtWorksStudios/node-aws-lambda), zip skill code and deploy AWS lambda with following command
```
gulp build # build ES5 code with babel
gulp deploy
```

If you face with following error message, you need to go AWS console and put appropriate IAM Role information in lambda_config.js. All lambda deployment configuration is put there.

```
1 validation error detected: Value 'arn:aws:iam::xxxxxxxxxxxx:role/lambda_basic_execution' at 'role' failed to satisfy constraint: Member must satisfy regular expression pattern: arn:aws:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+
Details:
```

## Setup Skill

### Lambda setup on AWS Console

 After your skill zip file is uploaded, you need to associate "Alexa Skills Kit" as Trigger.  

### Skill setup on portal
In order to test skill Alexa systems, we need to associate Lambda function  ARN and invocation name etc. at
[Amazon Developer Console](https://developer.amazon.com/edw/home.html#/).

##  Let's Ask Alexa !

If you finish following step, you can test your skill on your associated devices or portal site
```
Alexa, ask {your invocation name}
```
