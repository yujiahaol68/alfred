import { Library } from 'botbuilder';

interface BasicLibrary {
  greeting:Library;
  misunderstand:Library;
}
export interface LibsReady {
  basic:BasicLibrary;
}

export interface MountAllLibsAsRootLib {
  (nLibraries:Library[]) : Library;
}