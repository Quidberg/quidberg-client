export interface DropListType {
  name: string;
  id: string;
}

export interface RegistrationStepType {
  step: string;
  component: JSX.Element;
}

export interface ExaminationCheckListType {
  name: string;
  id: string;
  isChecked: boolean;
  isAlreadySelected?: boolean;
  title?: string;
}
