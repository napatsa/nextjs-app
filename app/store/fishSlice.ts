import { SetState, StateType } from '.';

export interface FishState {
  fishes: number;
  loading: boolean;
  addFish: () => void;
}

export const createFishSlice = (set: SetState<StateType>) => ({
  fishes: 10,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});
