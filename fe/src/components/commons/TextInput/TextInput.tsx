import { forwardRef } from 'react';
import * as S from './TextInputStyle';

interface TextInputProps {
  type?: string;
  label: string;
  placeholder?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ type, label, placeholder }, ref) => {
    return (
      <S.TextInput>
        <S.Label>{label}</S.Label>
        <S.Input type={type} placeholder={placeholder} ref={ref} />
      </S.TextInput>
    );
  },
);
