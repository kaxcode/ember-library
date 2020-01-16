import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
  responseMessage: '',
  emailAddress: '',
  header: 'Comming Soon',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  actions: {
    saveInvitation() {
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', { email });

      newInvitation
        .save()
        .catch(e => {
          // console.log(e);
        })
        .finally(response => {
          this.set('responseMessage', `Thank you! We saved your email address.`);
          this.set('emailAddress', '');
        });
    },
  },
});
