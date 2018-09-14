import Controller from '@ember/controller';
import { task, timeout } from 'ember-concurrency';

export default Controller.extend({

    polledModel: task(function * (){
        //getting error when nowPLaying object is deleted
        while(true){
            console.log("hi")
            //let result = yield this.store.query('google-sheet',{});
            yield timeout(1000);
            console.log(result);
            return "YO"
            //return result;
        }
    }).on('didInsertElement'),

    pollForSomething: task(function* () {
        let result;
        let times = 0;
        while (!result && times++ < NUM_TIMES) {
            yield timeout(POLLING_INTERVAL);
            result = yield this.store.query('google-sheet',{});
        }
        return result;
    }).drop()
        
        
});
