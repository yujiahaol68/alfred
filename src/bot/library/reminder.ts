import { MsgUtils } from './../../util/MsgUtils';
import { LuisManager } from './../../util/LuisManager';
import {
  LibModuleReady,
  DialogReady,
} from './../../interfaces/dialog_interfaces';
import {
  AttachmentLayout,
  CardAction,
  HeroCard,
  Message,
  Prompts,
} from 'botbuilder';
import { Basic } from '../step';

const create:DialogReady = {
  name: 'Create',
  waterFall: [
    (session, args, next) => {
      const reminderContent = LuisManager.getEntityContent(args, 'Reminder.Text');
      if (reminderContent) {
        session.dialogData.reminderText = reminderContent;
        Prompts.confirm(session, 'Are you sure?');
      } else {
        Prompts.text(session, 'What is it for?');
      }
    },
    (session, args, next) => {
      if (args.response === true) {
        MsgUtils.sayAsSend(session, `OK. I will add < ${session.dialogData.reminderText} > as your reminder`);
        session.endDialog();
      } else {
        const reminderText = args.response;
        const msg = new Message(session);
        msg.attachmentLayout(AttachmentLayout.carousel);
        msg.addAttachment(
          new HeroCard(session)
            .title('Reminder')
            .text(`${reminderText}`),
        );
        session.send(msg);
        MsgUtils.sayAsSend(session, `OK. I got it.`);
        MsgUtils.sayAsSend(session, `I will remind you when timeline close.`);
        session.endDialog();
      }
    },
  ],
  actions: {
    triggerAction: {
      matches: 'Reminder.Create',
    },
  },
};

export const reminderModule:LibModuleReady = {
  moduleName: 'Reminder',
  dialogs: [
    create,
  ],
};