import React from 'react';
import styles from './body.module.scss'

type DropdownProps = {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption, onSelect }) => {
  return (
    <div className={styles['dropdown']}>
      {options.map((option, index) => (
        <p
          key={index}
          onClick={() => {
            onSelect(option);
          }}
        >
          {option}
        </p>
      ))}
    </div>
  );
};

export default Dropdown;
