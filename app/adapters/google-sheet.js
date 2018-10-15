import DS from 'ember-data';
import ENV from '../config/environment';
import { inject as service } from '@ember/service'
//TODO BETTER ERROR HANDLING
/*
https://feeds.rasset.ie/rteavgen/az/?type=radio&letter=a&format=jsonp&callback=html5radioplayer
https://feeds.rasset.ie/rteavgen/latest/?type=radio&format=jsonp&callback=html5radioplayer
https://feeds.rasset.ie/rteavgen/chart/?type=radio
*/
export default DS.RESTSerializer.extend({
    ajax: service(),

    query(store, type, query) {

        let url = `${ENV.googleSheet}`;
        return this.get("ajax").request(url, {
            dataType: "jsonp",
            jsonpCallback:"c",
        })
            .catch(function (error) {
                throw error;
            });

    }
});
