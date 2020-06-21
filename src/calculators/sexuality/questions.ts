import { RadioOption } from "components/RadioQuestion";

export const yesNo = (id: string): RadioOption[] => {
  return [
    { value: 'yes', name: `${id}_yes`, label: 'Yes' },
    { value: 'no', name: `${id}_no`, label: 'No' },
  ];
}
