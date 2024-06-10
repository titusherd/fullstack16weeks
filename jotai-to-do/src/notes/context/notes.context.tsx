import { atom } from "jotai";
import { INote } from "../../types/entity";
import { atomWithStorage } from "jotai/utils";

export const notesAtom = atom<INote[]>([]);
export const notesStorageAtom = atomWithStorage<INote[]>("notes", []);
//is an atom that holds an array of INote objects. This atom will be used to store the notes in the application. The initial value of the atom is an empty array.
