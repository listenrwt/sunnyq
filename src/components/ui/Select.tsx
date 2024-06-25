import { CHOICE } from '@/src/lib/type';
import React from 'react';

export interface Option {
  label: string;
  value: any;
}

interface SelectProps {
  name: string;
  options: Option[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;
  defaultValue?: any;
}

export const Select: React.FC<SelectProps> = ({
  name,
  options,
  onChange,
  defaultValue,
}) => {
  return (
    <div>
      <select
        name={name}
        id={name}
        className='mt-1.5 w-full rounded-md border-gray-300 text-gray-700 sm:text-sm p-3 bg-slate-50'
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
