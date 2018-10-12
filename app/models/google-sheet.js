import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({

    email: DS.attr(),
    name: DS.attr("string"),
    county: DS.attr("string"),
    phonenumber: DS.attr("string"),
    clubName: DS.attr("string"),
    clubDescription: DS.attr("string"),
    website: DS.attr("string")

});
