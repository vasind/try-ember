import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | login-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{login-form}}`);

    fillIn('#inputEmail', 'user');
    fillIn('#inputPassword', 'password');

    await click('#siginBtn');

    assert.dom('.card-title.text-center').hasText('Logged in');
  });
});
