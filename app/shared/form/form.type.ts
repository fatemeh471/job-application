import { ReactNode } from "react";

export type ErrorMessageType = { error: string | string[]}

export type InputType = {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  export interface MultiSelectType {
    label: string;
    options: string[];
    value: string[];
    onChange: (selectedOptions: string[]) => void;
  }
  export type CheckboxOptionType = {
    value: string;
    isChecked: boolean;
    children: ReactNode;
    onChange: (value: string) => void;
  };