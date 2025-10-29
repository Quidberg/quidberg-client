import { ButtonHTMLAttributes, ReactElement } from "react";

export interface ButtonPropsType {
  children: string | ReactElement;
  className?: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  isOutlined?: boolean;
  textColor?: string;
  bgColor?: string;
  outlineColor?: string;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
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
  text: string;
}

export type SubScriptionType = "premium" | "basic" | "free";

export type LearningType = "classes" | "tutorials" | "solutions";
