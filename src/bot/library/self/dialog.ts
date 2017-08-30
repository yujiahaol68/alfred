import { DialogReady } from './../../../interfaces/dialog_interfaces';

export const greeting:DialogReady = {
  name: 'greeting',
  waterFall: [
    (session, args, next) => {
      session.say('Hi !', 'Hi');
    },
  ],
  actions: {
    triggerAction: {
      matches: 'self.greeting',
    },
  },
};