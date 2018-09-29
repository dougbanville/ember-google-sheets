import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import d3 from 'd3';
import { filterBy } from '@ember/object/computed';


export default Controller.extend({

    ajax: service(),


    mapJson: computed(function(){
        let url = `http://localhost/d3map/ie.json`;
        return this.get("ajax").request(url, {}).then(json=>{
            return json;
        })
    }),
    filterModel: filterBy("model","county","Dublin"),


    actions:{
        goCounty(){
            alert("Fuck yeah")
        }
    }


    
});
