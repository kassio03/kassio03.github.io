import { useState } from 'react';

import DoneSvg from '../../assets/done.svg?react';

interface MTListCheckboxProps {
  id: string;
}

const MTListCheckbox = ({ id }: MTListCheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const invertCheckedValue = () => {
    setChecked(previousValue => !previousValue);
  };

  return (
    <div className="inline-block h-5 w-5">
      <button
        className={`h-full w-full rounded-[5px] border-[1px] border-[#FFB573] ${checked ? 'bg-[#FFB573]' : ''}`}
        onClick={invertCheckedValue}
      >
        {checked && <DoneSvg className="m-[2px]" fill="#545454" />}
      </button>
      <input
        id={id}
        checked={checked}
        onChange={invertCheckedValue}
        type="checkbox"
        className="invisible h-0 w-0"
      />
    </div>
  );
};

export default MTListCheckbox;
