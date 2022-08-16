import {
  ElementHTMLDefaultType_Extended,
  RoundedType,
  ElevationType,
  ElementSizeDefaultType_Extended,
} from '../../../types';

interface ModuleCustomType {
  rounded?: RoundedType;
  elevation?: ElevationType;
  color?: string;
  background?: string;
  outlined?: boolean;
  dark?: boolean;
  light?: boolean;
}

interface StyledPropsType {
  rounded?: number | string;
  color?: string;
  background?: string;
  outlined?: boolean;
}

export interface PaperType extends ModuleCustomType, ElementHTMLDefaultType_Extended, ElementSizeDefaultType_Extended {}
export interface PaperStyledType
  extends StyledPropsType,
    ElementHTMLDefaultType_Extended,
    ElementSizeDefaultType_Extended {}