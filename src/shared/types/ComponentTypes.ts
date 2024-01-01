import { ReactElement } from "react";

export interface ButtonPropsType {
  children: string | ReactElement;
  className?: string;
  onClick?: () => void;
  isOutlined?: boolean;
  textColor?: string;
  bgColor?: string;
  outlineColor?: string;
  disabled?: boolean
  type?: any
}

export interface SelectorType {
  isActive: boolean;
  text: string;
  selectorClick: (x: string) => void;
}

export interface SearchResultsType {
  tag: string[];
  title: string;
  pic: string;
}

export interface TagType {
  text: string
}