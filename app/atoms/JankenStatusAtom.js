import { atom } from 'jotai';

export const JankenStatusAtom = atom({
  winCount: 0,
  isGuChokiPaAble: false,
  isStartAble: true,
  isGaming: false,
});