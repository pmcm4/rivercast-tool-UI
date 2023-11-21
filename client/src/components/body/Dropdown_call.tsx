import React, { useState } from 'react';
import Dropdown from './Dropdown';
import styles from './body.module.scss';

type DropdownCallProps = {
  setSelectedFilter: (filter: string) => void;
};


const DropdownCall: React.FC<DropdownCallProps> = ({ setSelectedFilter }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedFilter, setSelectedFilters] = useState('All');
  const filterOptions = ['All', 'Actual', 'Predicted'];

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleFilterSelect = (option: string) => {
    console.log('Selected Filter:', option);
    setSelectedFilter(option);
    setSelectedFilters(option);
    setShowDropdown(false);
  };

  return (
    <>
      <button
        className={styles[`dropdown-btn ${showDropdown ? 'active' : ''}`]}
        onClick={toggleDropdown}
      >
        {!showDropdown && (
          <div className={styles['dropdown-txt-values']}>
            <span >{selectedFilter}</span>
          </div>
        )}
        <div className={styles['dropdown-btn']}>
          {showDropdown && (
        <Dropdown options={filterOptions} onSelect={handleFilterSelect} />

          )}
        </div>

      </button>
    </>
  );
};

export default DropdownCall;
