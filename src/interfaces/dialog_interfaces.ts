import {
  ITriggerActionOptions,
  IDialogWaterfallStep,
  Dialog,
} from 'botbuilder';

interface ActionSheets {
  triggerAction:ITriggerActionOptions;
}

export interface DialogReady {
  name:string;
  waterFall:IDialogWaterfallStep | IDialogWaterfallStep[];
  actions:ActionSheets;
}

export interface LibModuleReady {
  moduleName:string;
  dialogs:DialogReady[] | DialogReady;
}

export interface LibraryReady {
  libName:string;
  dialogChildren:Dialog[];
}
