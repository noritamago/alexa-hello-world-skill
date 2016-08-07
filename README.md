# alexa-hello-world-skill
boiler template for Alexa skill development by rewriting https://github.com/amzn/alexa-skills-kit-js/tree/master/samples/helloWorld

## About



## Install and Setup
```
npm install
```

## Test skill code

We can conduct unit test to mimic Alexa Intent. Similar test is available in AWS Console,    
```
npm test
```

## Deployment lambda

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

## Test skill

### Lambda

 After your skill zip file is uploaded, you need to associate "Alexa Skills Kit" as Trigger.  

### Skill setup
In order to test skill Alexa systems, we need to associate Lambda function  ARN and invocation name etc. at
[Amazon Developer Console](https://developer.amazon.com/edw/home.html#/).
