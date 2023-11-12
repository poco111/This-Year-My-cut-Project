import { forwardRef } from 'react';
import * as S from './TextInputStyle';

interface TextInputProps {
  type?: string;
  label: string;
  placeholder?: string;
  value?: string | number;
  alertText?: boolean | string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ type, label, placeholder, value, alertText, onChange }, ref) => {
    return (
      <S.TextInput>
        <S.LabelSection>
          <S.Label>{label}</S.Label>
          {alertText && <S.AlertText>{alertText}</S.AlertText>}
        </S.LabelSection>
        <S.Input
          type={type}
          placeholder={placeholder}
          ref={ref}
          value={value}
          onChange={onChange}
        />
      </S.TextInput>
    );
  },
);
