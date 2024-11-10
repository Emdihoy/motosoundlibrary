import { create } from "zustand";

type MotoStore = {
    motoObject: number;
    increment: () => void;
    decrement: () => void;
};

export const useMotoStore = create<MotoStore>((set) => ({
    motoObject: 0,

    increment: () => {
        set((state) => ({motoObject: state.motoObject + 1  }));
    },

    decrement: () => {
        set((state) => ({motoObject: state.motoObject - 1  }));
    },

}));