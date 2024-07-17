
import { create } from 'zustand';
import { FormActionsType, FormStatesType } from './formStore.type';
 
export const useFormStore = create<FormStatesType & FormActionsType>((set) => ({
    formData: {
        fullName: '',
        email: '',
        experience: '',
        skills: [],
      },
      setFormData: (field, value) => set((state) => ({
        formData: {
          ...state.formData,
          [field]: value,
        },
      })),
}));