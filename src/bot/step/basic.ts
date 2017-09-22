import {
  BasicStepBuilder,
  BasicStep,
} from './../../interfaces/step_interfaces';
import {
  IDialogWaterfallStep,
  Prompts,
} from 'botbuilder';

const missMatchedHandler:IDialogWaterfallStep[] = [
  (session, args, next) => {
    // TODO: default ask chatter bot to give response
    session.say('Sorry, I can\'t understand', 'Sorry, I can\'t understand');
  },
];

const askFor:BasicStepBuilder = (stateMent:string, payLoad?:any) => {

  const attachment:IDialogWaterfallStep = (session, args, next) => {
    Prompts.attachment(session, stateMent);
  };

  const confirm:IDialogWaterfallStep = (session, args, next) => {
    Prompts.confirm(session, stateMent);
  };

  const choose:IDialogWaterfallStep = (session, args, next) => {
    if (!payLoad) throw new Error('chioce must have payLoad');
    const { options, listStyle } = payLoad;

    if (options instanceof Array) throw new Error('chioce must be contained in an Array');
    if (options.length <= 1) throw new Error('chioce payLoad must be an Array that length greater than 1');

    Prompts.choice(session, stateMent, options, { listStyle });
  };

  const detail:IDialogWaterfallStep = (session, args, next) => {
    Prompts.text(session, stateMent);
  };

  const email:IDialogWaterfallStep = (session, args, next) => {
    // TODO: Wait for customized prompts base on regular expression
  };

  const num:IDialogWaterfallStep = (session, args, next) => {
    Prompts.number(session, stateMent);
  };

  const time:IDialogWaterfallStep = (session, args, next) => {
    Prompts.time(session, stateMent);
  };

  const location:IDialogWaterfallStep = (session, args, next) => {
    // TODO: Use botBuilder-location to implement
  };

  const phoneNumber:IDialogWaterfallStep = (session, args, next) => {
    // TODO: Wait for customized prompts base on regular expression
  };

  return {
    attachment,
    confirm,
    choose,
    detail,
    email,
    num,
    location,
    phoneNumber,
    time,
  };
};

export const Basic:BasicStep = {
  askFor,
  missMatchedHandler,
};