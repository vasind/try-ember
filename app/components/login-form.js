import Component from '@ember/component';

export default Component.extend({
  classNames: ['container'],
  actions: {
    validateForm() {
      if (this.username && this.password) {
        this.set('isLoggedin', true);
      }
    }
  }
});
