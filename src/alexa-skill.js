// ES6 version
// https://github.com/amzn/alexa-skills-kit-js/blob/master/samples/helloWorld/src/AlexaSkill.js
//
import Response from './alexa-response';

export default class AlexaSkill {

    constructor(appId) {
        this._appId = appId;
        this.speechOutputType = {
            PLAIN_TEXT: 'PlainText',
            SSML: 'SSML'
        };
        this.requestHandlers = {
            LaunchRequest: function (event, context, response) {
                this.eventHandlers.onLaunch.call(this, event.request, event.session, response);
            },

            IntentRequest: function (event, context, response) {
                this.eventHandlers.onIntent.call(this, event.request, event.session, response);
            },

            SessionEndedRequest: function (event, context) {
                this.eventHandlers.onSessionEnded(event.request, event.session);
                context.succeed();
            }
        };

        /**
         * Override any of the eventHandlers as needed
         */
        this.eventHandlers = {
            /**
             * Called when the session starts.
             * Subclasses could have overriden this function to open any necessary resources.
             */
            onSessionStarted: function (sessionStartedRequest, session) {
            },

            /**
             * Called when the user invokes the skill without specifying what they want.
             * The subclass must override this function and provide feedback to the user.
             */
            onLaunch: function (launchRequest, session, response) {
                throw 'onLaunch should be overriden by subclass';
            },

            /**
             * Called when the user specifies an intent.
             */
            onIntent: function (intentRequest, session, response) {
                var intent = intentRequest.intent,
                    intentName = intentRequest.intent.name,
                    intentHandler = this.intentHandlers[intentName];
                if (intentHandler) {
                    console.log('dispatch intent = ' + intentName);
                    intentHandler.call(this, intent, session, response);
                } else {
                    throw 'Unsupported intent = ' + intentName;
                }
            },

            /**
             * Called when the user ends the session.
             * Subclasses could have overriden this function to close any open resources.
             */
            onSessionEnded: function (sessionEndedRequest, session) {
            }
        };
        /**
         * Subclasses should override the intentHandlers with the functions to handle specific intents.
         */
        this.intentHandlers = {};
    }



    execute (event, context) {
        try {
            console.log('session applicationId: ' + event.session.application.applicationId);

            // Validate that this request originated from authorized source.
            if (this._appId && event.session.application.applicationId !== this._appId) {
                console.log('The applicationIds don\'t match : ' + event.session.application.applicationId + ' and '
                    + this._appId);
                throw 'Invalid applicationId';
            }

            if (!event.session.attributes) {
                event.session.attributes = {};
            }

            if (event.session.new) {
                this.eventHandlers.onSessionStarted(event.request, event.session);
            }

            // Route the request to the proper handler which may have been overriden.
            var requestHandler = this.requestHandlers[event.request.type];
            requestHandler.call(this, event, context, new Response(context, event.session));
        } catch (e) {
            console.log('Unexpected exception ' + e);
            context.fail(e);
        }
    }
}