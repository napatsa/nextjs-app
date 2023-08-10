import { SetState, StateType } from '.';

export interface FishState {
  fishes: number;
  loadingFish: boolean;
  actionsFish: { addFish: () => void };
}

export const createFishSlice = (set: SetState<StateType>) => ({
  fishes: 10,
  loadingFish: false,
  actionsFish: {
    addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
  },
});
