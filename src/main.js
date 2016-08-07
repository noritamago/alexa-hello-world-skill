import 'babel-polyfill';
import HelloWorldSkill from './hello-world-skill';

export default class Main {
    async handler(event, context) {
        try {
            let skill = new HelloWorldSkill();
            skill.execute(event, context);

        }catch (e) {
            context.fail(e);
        }
    }
}
