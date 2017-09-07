import { LibModuleReady } from './../../../interfaces/dialog_interfaces';
import { greeting } from './greeting';

export const selfModule:LibModuleReady = {
  moduleName: 'self',
  dialogs: [
    greeting,
  ],
};