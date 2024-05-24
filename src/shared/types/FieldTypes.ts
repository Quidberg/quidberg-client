import { ReactElement } from "react";
import { FormErrorType } from "../../app/slices/oracleRegistration/types";
import { DropListType } from "./RegistrationDataTypes";

export interface BasicValueType {
  name: string;
  id: string;
}

export interface InputFieldPropsType  {
  placeholder?: string;
  title?: string;
  className?: string;
  type?: string;
  id: string;
  value: string | number;
  fieldName?: string;
  error?: FormErrorType[] | null | string;
  handleChange?: (e: any) => void;
  isIdle?: boolean;
  infoModalContent?: string;
  titleClassName?: string;
  min?: number;
  max?: number;
  leftIcon?: ReactElement | null;
  isOutlined?: boolean;
  // Array<FormErrorType> | null
}

export interface DropDownFieldDataType extends InputFieldPropsType {
  list?: DropListType[] | null;
  dropDownText?: string;
}

export interface DropDownFieldType extends DropDownFieldDataType {
  isMenuDown?: boolean;
  handleListClick: ({ item, id }: { item: DropListType; id: string }) => void;
  handleFilterList?: ({ text, id }: { text: string; id: string }) => void;
  isDropDownLocked?: boolean;
  isSearchLocked?: boolean;
  handleDropDownClick?: (id: string) => void;
}
