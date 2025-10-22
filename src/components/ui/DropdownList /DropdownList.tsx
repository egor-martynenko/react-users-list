import styles from './DropdownList.module.css';

import type { FC } from "react";
import { useState, useRef, useEffect } from 'react';
import {PointerIcon} from "../../../assets/svg/PointerIcon.tsx";
import {CheckIcon} from "../../../assets/svg/СheckIcon.tsx";

type DropdownListProps = {
  value: string;
  values: string[];
  onChange: (event: { target: { value: string } }) => void;
  placeholder?: string;
  disabled?: boolean;
};

export const DropdownList: FC<DropdownListProps> = ({
                                                      value,
                                                      values,
                                                      onChange,
                                                      placeholder = "Выберите значение",
                                                      disabled = false
                                                    }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (selectedValue: string) => {
    onChange({ target: { value: selectedValue } });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdownList} ref={dropdownRef}>
      <div
        className={`${styles.dropdownTrigger} ${isOpen ? styles.active : ''} ${
          disabled ? styles.disabled : ''
        }`}
        onClick={handleToggle}
      >
        <input className={styles.selectedValue} value={value || placeholder} />

        <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : styles.arrowDown}`}>
          <PointerIcon/>
        </span>
      </div>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {values.map((item) => (
            <div
              key={item}
              className={`${styles.dropdownItem} ${
                item === value ? styles.active : ''
              }`}
              onClick={() => handleSelect(item)}
            >
              <CheckIcon isActive={item === value }/>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};