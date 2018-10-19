
import DS from 'ember-data';
import { inject as service } from '@ember/service'

function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

export default DS.RESTSerializer.extend({
  
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    payload.feed.entry.map(obj => {
        obj.id = obj.id.$t.split('/').slice(-1).join()
        obj.email = obj.gsx$emailaddress.$t;
        obj.name = obj.gsx$whatsyourname.$t;
        obj.ap =  obj.gsx$approved.$t;
        obj.county=  obj.gsx$county.$t;
        obj.phonenumber =  obj.gsx$phonenumber.$t;
        obj.clubName = obj.gsx$yourclubsname.$t;
        obj.clubDescription = obj.gsx$abriefdescriptionofyourclub.$t;
        obj.website = obj.gsx$website.$t;
        obj.eventDate= obj.gsx$dateofyouropenday.$t;
        obj.eventTime = obj.gsx$time.$t;


    });
    let newPayload = payload.feed.entry.filter(r=>{
        return r.ap === "Y";
    })

    payload = {
      googleSheet: newPayload
    }
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});