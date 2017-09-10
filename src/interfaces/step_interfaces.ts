import {
  IDialogWaterfallStep,
} from 'botbuilder';

export interface BasicStep {
  askFor:RequestStep;
}

// TODO: high order or builder class to inject config of the step

interface RequestStep {
  confirm:IDialogWaterfallStep;
  number:IDialogWaterfallStep[];
  time:IDialogWaterfallStep[];
  location:IDialogWaterfallStep[];
  detail:IDialogWaterfallStep[];
  phoneNumber:IDialogWaterfallStep[];
  email:IDialogWaterfallStep[];
}