import {
  IDialogWaterfallStep,
} from 'botbuilder';

export interface BasicStepBuilder {
  (stateMent:string, payLoad?:any) : RequestStep;
}

export interface BasicStep {
  askFor:BasicStepBuilder;
  missMatchedHandler:IDialogWaterfallStep[];
}

// TODO: high order or builder class to inject config of the step

interface RequestStep {
  attachment:IDialogWaterfallStep;
  confirm:IDialogWaterfallStep;
  choose:IDialogWaterfallStep;
  num:IDialogWaterfallStep;
  time:IDialogWaterfallStep;
  location:IDialogWaterfallStep;
  detail:IDialogWaterfallStep;
  phoneNumber:IDialogWaterfallStep;
  email:IDialogWaterfallStep;
}