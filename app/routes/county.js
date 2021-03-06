import Route from '@ember/routing/route';
import { filterBy } from '@ember/object/computed';
import { hash } from 'rsvp';

export default Route.extend({

    activate(){
        window.scrollTo(0,0);
    },

    model(params){
        return hash({
            model: this.modelFor("application"),
            county: params.county
        })
    },
    setupController(controller,models){
        controller.set("model",models.model);
        controller.set("county",models.county);
    }
});
