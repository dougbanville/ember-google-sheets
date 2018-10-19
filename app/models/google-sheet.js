import DS from 'ember-data';
import attr from 'ember-data/attr';
import {computed} from '@ember/object';
import moment from 'moment';

export default DS.Model.extend({

    email: DS.attr(),
    name: DS.attr("string"),
    county: DS.attr("string"),
    phonenumber: DS.attr("string"),
    clubName: DS.attr("string"),
    clubDescription: DS.attr("string"),
    website: DS.attr("string"),
    eventTime: DS.attr(""),
    eventDate: DS.attr("Date"),
    displayDate: computed("eventDate","eventTime",function(){
        let time = this.get("eventTime");
        time = time.replace(":00 PM","PM");
        if(this.get("eventDate") == "Invalid Date"){
            return "TBC"
        }else{
            return `${moment(this.get("eventDate")).format("DD MMM YY")} ${time}`;
        }
    })

});
