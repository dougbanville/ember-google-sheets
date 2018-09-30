import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import d3 from 'd3';
import { filterBy } from '@ember/object/computed';


export default Controller.extend({

    ajax: service(),


    actions:{
        goCounty(){
            alert("Fuck yeah")
        }
    }


    
});
