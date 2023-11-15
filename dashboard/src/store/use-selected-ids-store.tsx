import { create } from 'zustand';

interface SelectedIdsStore {
    selectedIds: string[];
    toggleSelectedId: (id: string) => void;
}

const useSelectedIdsStore = create<SelectedIdsStore>((set) => ({
    selectedIds: [],
    toggleSelectedId: (id) =>
        set((state) => ({
            selectedIds: state.selectedIds.includes(id)
                ? state.selectedIds.filter((selectedId) => selectedId !== id)
                : [...state.selectedIds, id],
        })),
}));

export default useSelectedIdsStore;
