import { Library } from 'botbuilder';

interface BasicLibrary {
  ask:Library;
  greeting:Library;
  misunderstand:Library;
  nonsense:Library;
}
export interface LibsReady {
  basic:BasicLibrary;
}

export interface MountAllLibsAsRootLib {
  (nLibraries:Library[]) : Library;
}