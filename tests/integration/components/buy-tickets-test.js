import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | buy-tickets', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{buy-tickets}}`);

    assert.ok(find('.buy-tickets-link'), 'assert buy tickets link is rendered');
  });
});
