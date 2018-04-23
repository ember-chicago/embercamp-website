import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | sponsor-details', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('sponsor', {});

    await render(hbs`{{sponsor-details sponsor=sponsor}}`);

    assert.ok(find('.sponsor-details-link'), 'assert sponsor details rendered');
  });
});
