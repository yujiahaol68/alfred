import { DialogReady } from './../../../interfaces/dialog_interfaces';

export const greeting:DialogReady = {
  name: 'greeting',
  waterFall: [
    (session, args, next) => {
      session.say('Hi !', 'Hi');
      if (args.intent.entities[0].type == 'self') {
        session.say('Yep. This is Alfred');
      }
    },
  ],
  actions: {
    triggerAction: {
      matches: 'self.greeting',
    },
  },
};