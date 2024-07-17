type optionType = {
    value: string;
    label: string;
}
export type MultiSelectType = {
    options: optionType[],
    currentValues: string[],
    onChange: (value: string) => void;
    setCurrentValues: (values: string[]) => void;
    label: string

}