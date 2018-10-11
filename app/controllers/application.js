import Controller from '@ember/controller';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({

    showMobileNav: false,

    actions:{
        goCounty(county){
            this.transitionToRoute("county",county)
        },
        toggleMobileNav(){
            this.toggleProperty("showMobileNav")
        }
    }
        
        
});
