import { DialogReady } from './../../interfaces/dialog_interfaces';
import {
  Dialog,
  WaterfallDialog,
  Library,
} from 'botbuilder';
import * as _ from 'lodash';

class LibraryFactory {

  private static _instance:LibraryFactory;

  private _knowledge:Library[] = [];

  public createLibs(materials:DialogReady) {
    const waterDialog = new WaterfallDialog(materials.waterFall);
    const dialog = waterDialog.triggerAction(materials.actions.triggerAction);
    this.attachAdditionalAction(dialog);
    // TODO implement find lib function
    const lib = this.findLibOrCreate('basic');
    lib.dialog(materials.name, dialog);
    this._knowledge.push(lib);
  }

  private dialogClassify(libName:string, dialogMounted:Dialog) {

  }

  private findLibOrCreate(libName:string) {
    return new Library(libName);
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