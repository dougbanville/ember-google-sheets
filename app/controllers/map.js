import Controller from '@ember/controller';

export default Controller.extend({

    actions:{
        goCounty(county){
            this.transitionToRoute("county",county)
        }
    }
});
