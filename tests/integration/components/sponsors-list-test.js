import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | sponsors-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('sponsors', []);

    await render(hbs`{{sponsors-list premierSponsors=sponsors supportingSponsors=sponsors}}`);

    assert.ok(find('.sponsor-list'), 'sponsors list rendered');
  });
});
