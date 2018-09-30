import Controller from '@ember/controller';
import { filterBy } from '@ember/object/computed';
import { computed } from '@ember/object';

export default Controller.extend({

    /*counties: computed("model","county",function(){
        return this.get("model")
    }),

    filteredModel: filterBy(this.get("counties"),"county","dublin")
    */
});
