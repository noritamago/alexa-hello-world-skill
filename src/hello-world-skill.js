import AlexaSkill from './alexa-skill';

export default class HelloWorldSkill extends AlexaSkill {
    constructor(appId){
        super(appId);
        this.setup();
    }
    
    setup() {
        this.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
            console.log('HelloWorld onSessionStarted requestId: ' + sessionStartedRequest.requestId
                + ', sessionId: ' + session.sessionId);
            // any initialization logic goes here
        };

        this.eventHandlers.onLaunch = function (launchRequest, session, response) {
            console.log('HelloWorld onLaunch requestId: ' + launchRequest.requestId + ', sessionId: ' + session.sessionId);
            var speechOutput = 'Welcome to the Alexa Skills Kit, you can say hello';
            var repromptText = 'You can say hello';
            response.ask(speechOutput, repromptText);
        };

        this.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
            console.log('HelloWorld onSessionEnded requestId: ' + sessionEndedRequest.requestId
                + ', sessionId: ' + session.sessionId);
            // any cleanup logic goes here
        };

        this.intentHandlers = {
            // register custom intent handlers
            'HelloWorldIntent': function (intent, session, response) {
                response.tellWithCard('Hello World!', 'Greeter', 'Hello World!');
            },
            'AMAZON.HelpIntent': function (intent, session, response) {
                response.ask('You can say hello to me!', 'You can say hello to me!');
            }
        };
        
    }
}
