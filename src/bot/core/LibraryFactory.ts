import {
  DialogReady,
  LibModuleReady,
} from './../../interfaces/dialog_interfaces';
import {
  Dialog,
  WaterfallDialog,
  Library,
} from 'botbuilder';
import * as _ from 'lodash';

class LibraryFactory {

  private static _instance:LibraryFactory;

  private _knowledge:Library[] = [];

  public createLibs(libModules:LibModuleReady[]) {
    _.forEach(libModules, (libModule) => {
      const lib = new Library(libModule.moduleName);

      _.forEach(libModule.dialogs, (component) => {
        const waterDialog = new WaterfallDialog(component.waterFall);
        const dialog = waterDialog.triggerAction(component.actions.triggerAction);
        this.attachAdditionalAction(dialog);

        lib.dialog(component.name, dialog);
      });

      this._knowledge.push(lib);
    });

  }

  private attachAdditionalAction(waterDialog:Dialog) {
    return;
  }

  public getRootLib() {
    if (this._knowledge.length === 0)
      throw new Error('Not found any sub lib inside Factory');
    const rootLib = new Library('/');
    _.forEach(this._knowledge, (lib) => {
      rootLib.library(lib);
    });
    return rootLib;
  }

  public static getInstance() {
    LibraryFactory._instance = LibraryFactory._instance || new LibraryFactory();
    return LibraryFactory._instance;
  }
}

export const LibFactory = LibraryFactory.getInstance();