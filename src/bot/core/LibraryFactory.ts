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
    _.forEach(libModules, ({ moduleName, dialogs }) => {
      const lib = new Library(moduleName);

      _.forEach(dialogs, ({ name, waterFall, actions }) => {
        if (!name) throw new Error('Dialog must have a name');
        if (!waterFall) throw new Error('Dialog must contain steps!');
        if (!actions) throw new Error('Dialog must at least contain triggerAction');

        const waterDialog = new WaterfallDialog(waterFall);
        const dialog = waterDialog.triggerAction(actions.triggerAction);
        this.attachAdditionalAction(dialog);

        lib.dialog(name, dialog);
      });

      this._knowledge.push(lib);
    });

  }

  private attachAdditionalAction(dialog:Dialog) {
    // TODO: it can attach different type of actions into dialog
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