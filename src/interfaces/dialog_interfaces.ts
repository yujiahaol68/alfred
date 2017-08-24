import { IDialogWaterfallStep } from 'botbuilder';

export interface DialogReady {
  name:string;
  waterFall:IDialogWaterfallStep | IDialogWaterfallStep[];
}
