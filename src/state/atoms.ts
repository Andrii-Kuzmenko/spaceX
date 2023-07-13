import { atom } from "recoil";
import { Rocket } from "../types/Rocket";

export const favoritesState = atom<Rocket[]>({
  key: 'favoritesState',
  default: [],
});
