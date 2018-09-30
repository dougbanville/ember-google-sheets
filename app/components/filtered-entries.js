import Component from '@ember/component';
import computed from '@ember/object';
import { filter } from '@ember/object/computed';

export default Component.extend({

    didReceiveAttrs(){
        let counties = this.get("model");

        let selectedCounty = counties.filter(c=>{
            return c.county.toLowerCase() === this.get("county").toLowerCase() 
        })
        this.set("selectedCounty",selectedCounty);
    }

});
