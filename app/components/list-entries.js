import Component from '@ember/component';
import {inject as service} from '@ember/service';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({

    store: service('store'),

    getEntries: task(function *(){
        while(true){
            let entries = yield this.store.query('google-sheet',{});
            this.set("entries",entries);
            yield timeout(3000);    
        }
    }).on('didInsertElement')
});
