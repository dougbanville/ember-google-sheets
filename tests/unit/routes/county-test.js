import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | county', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:county');
    assert.ok(route);
  });
});
