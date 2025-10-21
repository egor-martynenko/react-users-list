import styles from './UserController.module.css'

import {Input} from "../ui/Input/Input.tsx";
import {Button} from "../ui/Button/Button.tsx";

import {SettingsIcon} from "../../assets/svg/SettingsIcon.tsx";
import {FunnelIcon} from "../../assets/svg/FunnelIcon.tsx";
import {AddIcon} from "../../assets/svg/AddIcon.tsx";

export const UserController = () => {
  return (
    <div className={styles.userController}>
      <div className={styles.leftGroup}>
        <div className={styles.inputWrapper}>
          <Input placeholder={'Найти пользователя'} />
        </div>
        <Button>
          <SettingsIcon/>
        </Button>
        <Button>
          <FunnelIcon/>
        </Button>
      </div>

      <Button isPrimary vsIcon>
        <AddIcon/>
        <span>
            Добавить пользователя
          </span>
      </Button>
    </div>
  );
};