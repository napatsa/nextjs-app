import { BearState, createBearSlice } from './bearSlice';
import { FishState, createFishSlice } from './fishSlice';

import { create } from 'zustand';

export type StateType = BearState & FishState;

export type SetState<T extends StateType> = {
  _(
    partial: T | Partial<T> | ((state: T) => T | Partial<T>),
    replace?: boolean | undefined,
  ): void;
  actionName?: string;
}['_'];

export const useBoundStore = create<StateType>((set, get) => ({
  ...createBearSlice(set),
  ...createFishSlice(set),
}));
