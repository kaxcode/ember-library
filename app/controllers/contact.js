import Controller from '@ember/controller';
import { and, gte, match, not } from '@ember/object/computed';

export default Controller.extend({
  responseMessage: '',
  emailAddress: '',
  message: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte('message.length', 5),
  isBothTrue: and('isValid', 'isLongEnough'),
  isDisabled: not('isBothTrue'),

  actions: {
    sendMessage() {
      alert(`Your message is being sent: ${this.get('emailAddress')}`);
      this.set(
        'responseMessage',
        `Thank you! We've received your message. ${this.get('emailAddress')} -- ${this.get(
          'message'
        )}`
      );
      this.set('emailAddress', '');
    },
  },
});
