import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CheckboxOption from "./CheckboxOption";

describe("CheckboxOption", () => {
  test("renders checkboxOption component correctly ", async () => {
    const value = "test";
    const isChecked = false;
    const children = "Checkbox option";
    const onChange = jest.fn();

    const { getByRole } = render(
      <CheckboxOption
        value={value}
        isChecked={isChecked}
        children={children}
        onChange={onChange}
      />
    );
    expect(getByRole("checkbox")).toBeInTheDocument();
  });

  test("calls onChange when checkbox is checked", async () => {
    const value = "test";
    const isChecked = false;
    const children = "Checkbox option";
    const onChange = jest.fn();

    const { getByRole } = render(
      <CheckboxOption
        value={value}
        isChecked={isChecked}
        children={children}
        onChange={onChange}
      />
    );

    fireEvent.click(getByRole("checkbox"));

    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(1));
  });

  test("calls onChange with correct value when checkbox is unchecked", async () => {
    const value = "test";
    const isChecked = true;
    const children = "Checkbox option";
    const onChange = jest.fn();

    const { getByRole } = render(
      <CheckboxOption
        value={value}
        isChecked={isChecked}
        children={children}
        onChange={onChange}
      />
    );

    fireEvent.click(getByRole("checkbox"));

    await waitFor(() => expect(onChange).toHaveBeenCalledTimes(1));
  });
});
