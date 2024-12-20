import { Field } from 'formik';
import { InputHTMLAttributes, useState } from 'react';

import DoneSvg from '../../assets/done.svg?react';

interface MTListCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  defaultChecked?: boolean;
}

const MTListCheckbox = ({ id, defaultChecked, ...rest }: MTListCheckboxProps) => {
  const [checked, setChecked] = useState(!!defaultChecked);

  return (
    <div className="inline-block h-5 w-5">
      <button
        type="button"
        className={`h-full w-full rounded-[5px] border-[1px] border-[#FFB573] ${checked ? 'bg-[#FFB573]' : ''}`}
      >
        {checked && <DoneSvg className="m-[2px]" fill="#545454" />}
      </button>
      <Field
        id={id}
        checked={checked}
        onChange={() => setChecked(previousValue => !previousValue)}
        type="checkbox"
        className="invisible h-0 w-0"
        {...rest}
      />
    </div>
  );
};

export default MTListCheckbox;
