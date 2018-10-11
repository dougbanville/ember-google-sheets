import Route from '@ember/routing/route';

export default Route.extend({

  activate(){
    window.scrollTo(0,0);
  },

    model(){
        return this.store.query("googleSheet",{});
    },
    actions: {
        error(error, transition) {
          if (error.status === '404') {
            //this.replaceWith('login');
          } else {
            // Let the route above this handle the error.
            return true;
          }
        }
      }
});
