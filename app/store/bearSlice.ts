import { SetState, StateType } from '.';

export interface BearState {
  bears: number;
  loading: boolean;
  addBear: () => void;
  eatFish: () => void;
}

export const createBearSlice = (set: SetState<StateType>) => ({
  bears: 0,
  loading: false,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  eatFish: async () => {
    set(() => ({ loading: true }));
    await new Promise((resolve) => setTimeout(resolve, 3000));
    set((state) => {
      return { fishes: state.fishes - 1 };
    });
    set(() => ({ loading: false }));
  },
});
