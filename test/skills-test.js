import 'babel-polyfill'
import assert from 'power-assert'
import Main from '../src/main'

describe('Main', () => {

    let event = {
        'session': {
            'new': true,
            'sessionId': 'session1234',
            'attributes': {},
            'user': {
                'userId': null
            },
            'application': {
                'applicationId': 'amzn1.echo-sdk-ams.app.[unique-value-here]'
            }
        },
        'version': '1.0',
        'request': {
            'type': 'LaunchRequest',
            'requestId': 'request5678'
        }
    };

    it('should handle start session', async (done)=>{
        let main = new Main();
        let context = {
            succeed : (result)=>{
                assert( result !== null );
                done();
            },
            fail : done
        };

        event.session.new = true;
        event.request.type = 'LaunchRequest';
        delete event.request.intent;

        main.handler(event, context);
    });

    it('should handle intent', async (done)=>{
        let main = new Main();
        let context = {
            succeed : (result)=>{
                assert( result !== null );
                done();
            },
            fail : done,
        };

        event.session.new = false;
        event.request.type = 'IntentRequest';
        event.request.intent = { 'slots': {}, 'name': 'HelloWorldIntent' };
        main.handler(event, context);
    });

    it('should handle end session', async (done)=>{
        let main = new Main();
        let context = {
            succeed : (result)=>{
                assert( result !== null );
                done();
            },
            fail : done,
        };

        event.session.new = false;
        event.request.type = 'SessionEndedRequest';
        delete event.request.intent;

        main.handler(event, context);
    });
});