import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('county',{
    path: `:county`
  });
  this.route('apply');
  this.route('map');
});

export default Router;
