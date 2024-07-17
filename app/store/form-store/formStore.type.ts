export type StatesType = {
    fullName: string;
    email: string;
    experience: string;
    skills: string[];
}
export type FormStatesType = {
    formData: StatesType
}
export type FormActionsType = {
    setFormData: (field: keyof FormData, value: string | string[]) => void;
 }