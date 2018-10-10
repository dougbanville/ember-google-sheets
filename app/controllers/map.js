import Controller from '@ember/controller';

export default Controller.extend({

    actions:{
        goCounty(county){
            //alert(`Fuck ${county}`)
            this.transitionToRoute("county",county)
        }
    }
});
