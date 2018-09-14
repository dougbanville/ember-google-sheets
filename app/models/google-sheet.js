import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({

    email: DS.attr(),
    name: DS.attr("string")

});
