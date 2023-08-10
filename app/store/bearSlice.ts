import { SetState, StateType } from '.';

export interface BearState {
  bears: number;
  loadingBear: boolean;
  actionsBear: { addBear: () => void; eatFish: () => void };
}

export const createBearSlice = (set: SetState<StateType>) => ({
  bears: 0,
  loadingBear: false,
  actionsBear: {
    addBear: () => set((state) => ({ bears: state.bears + 1 })),
    eatFish: async () => {
      set((state) => ({ loadingBear: true }));
      await new Promise((resolve) => setTimeout(resolve, 3000));
      set((state) => {
        return { fishes: state.fishes - 1 };
      });
      set((state) => ({ loadingBear: false }));
    },
  },
});
