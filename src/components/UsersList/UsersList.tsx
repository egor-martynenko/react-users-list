import styles from './UsersList.module.css'

import { useState } from "react";
import {Button} from "../ui/Button/Button.tsx";
import {ArrowIcon} from "../../assets/svg/ArrowIcon.tsx";
import {Ellipsis} from "../../assets/svg/Ellipsis.tsx";
import {DropdownList} from "../ui/DropdownList /DropdownList.tsx";
import {ArrowLeftIcon} from "../../assets/svg/ArrowLeftIcon.tsx";
import {ArrowRightIcon} from "../../assets/svg/ArrowRightIcon.tsx";

const usersData = [
  {
    id: 13619,
    role: "Админ",
    userName: "Александр",
    login: "someDesigner",
    jobTitle: "Дизайнер",
    contacts: "@test",
    email: "test@test.ru",
    phone: "+799999999999",
    city: "Нижний Новгород",
  },
  {
    id: 23449,
    role: "Админ",
    userName: "Сергей",
    login: "someDeveloper",
    jobTitle: "Front End разработчик",
    contacts: "@dev",
    email: "dev@dev.ru",
    phone: "+72231242356",
    city: "Москва",
  },
  {
    id: 34567,
    role: "Пользователь",
    userName: "Мария",
    login: "dataAnalyst",
    jobTitle: "Аналитик данных",
    contacts: "@maria_analyst",
    email: "maria@company.ru",
    phone: "+79998887766",
    city: "Санкт-Петербург",
  }
];

const jobsData = [
  "Дизайнер",
  "Front End разработчик",
  "Back End разработчик",
  "Аналитик данных",
  "Data Scientist",
  "QA-инженер",
  "DevOps-инженер",
];

export const UsersList = () => {
  const [users, setUsers] = useState(usersData);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof (typeof usersData)[0];
    direction: 'asc' | 'desc';
  } | null>(null);

  const sortedUsers = [...users].sort((a, b) => {
    if (!sortConfig) return 0;

    const { key, direction } = sortConfig;
    const aValue = a[key];
    const bValue = b[key];

    if (aValue < bValue) {
      return direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const handleChange = (
    id: number,
    field: keyof (typeof usersData)[0],
    value: string
  ) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, [field]: value } : user
      )
    );
  };

  const handleSort = (key: keyof (typeof usersData)[0]) => {
    let direction: 'asc' | 'desc' = 'asc';

    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    setSortConfig({ key, direction });
  };

  return (
    <div className={styles.usersList_wrapper}>
      <table
       className={styles.usersList_table}
      >
        <thead className={styles.usersList_header}>
        <tr>
          <th onClick={() => handleSort('id')}>
            <div className={styles.headerGroup}>
              <ArrowIcon direction={
                sortConfig?.key === 'id' ? sortConfig.direction : null
              } />
              <span>ID</span>
            </div>
          </th>
          <th onClick={() => handleSort('role')}>
            <div className={styles.headerGroup}>
              <ArrowIcon direction={
                sortConfig?.key === 'role' ? sortConfig.direction : null
              } />
              <span>Роль</span>
            </div>
          </th>
          <th onClick={() => handleSort('userName')}>
            <div className={styles.headerGroup}>
              <ArrowIcon direction={
                sortConfig?.key === 'userName' ? sortConfig.direction : null
              }/>
              <span>Имя</span>
            </div>
          </th>
          <th onClick={() => handleSort('login')}>
            <div className={styles.headerGroup}>
              <ArrowIcon direction={
                sortConfig?.key === 'login' ? sortConfig.direction : null
              }/>
              <span>Логин</span>
            </div>
          </th>
          <th onClick={() => handleSort('jobTitle')}>
            <div className={styles.headerGroup}>
              <ArrowIcon direction={
                sortConfig?.key === 'jobTitle' ? sortConfig.direction : null
              } />
              <span>Должность</span>
            </div>
          </th>
          <th onClick={() => handleSort('contacts')}>
            <div className={styles.headerGroup}>
              <ArrowIcon direction={
                sortConfig?.key === 'contacts' ? sortConfig.direction : null
              } />
              <span>Контакты</span>
            </div>
          </th>
          <th onClick={() => handleSort('email')}>
            <div className={styles.headerGroup}>
              <ArrowIcon direction={
                sortConfig?.key === 'email' ? sortConfig.direction : null
              } />
              <span>Почта</span>
            </div>
          </th>
          <th onClick={() => handleSort('phone')}>
            <div className={styles.headerGroup}>
              <ArrowIcon direction={
                sortConfig?.key === 'phone' ? sortConfig.direction : null
              } />
              <span>Телефон</span>
            </div>
          </th>
          <th onClick={() => handleSort('city')}>
            <div className={styles.headerGroup}>
              <ArrowIcon direction={
                sortConfig?.key === 'city' ? sortConfig.direction : null
              } />
              <span>Город</span>
            </div>
          </th>
        </tr>
        </thead>

        <tbody className={styles.usersList_body}>
        {sortedUsers.map((user) => (
          <tr key={user.id} className={styles.usersList_item}>
            <td>
              <div className={styles.usersList_content}>
                <span>{user.id}</span>
                <div className={styles.dragIcon}>
                  <Ellipsis/>
                </div>
              </div>
            </td>

            <td>
              <div className={styles.usersList_content}>
              <input
                className={styles.usersList_input}
                value={user.role}
                name="role"
                onChange={(e) =>
                  handleChange(user.id, "role", e.target.value)
                }
              />
              </div>
            </td>

            <td>
              <div className={styles.usersList_content}>
                <input
                  className={styles.usersList_input}
                  value={user.userName}
                  name="userName"
                  onChange={(e) =>
                    handleChange(user.id, "userName", e.target.value)
                  }
                />
              </div>
            </td>

            <td>
              <div className={styles.usersList_content}>
                <input
                  className={styles.usersList_input}
                  value={user.login}
                  name="login"
                  onChange={(e) =>
                    handleChange(user.id, "login", e.target.value)
                  }
                />
              </div>
            </td>

            <td>
              <div className={styles.usersList_content}>
                <DropdownList
                  value={user.jobTitle}
                  onChange={(e) => handleChange(user.id, 'jobTitle', e.target.value)}
                  placeholder="Выберите роль"
                  values={jobsData}
                />
              </div>
            </td>

            <td>
              <div className={styles.usersList_content}>
                <input
                  className={styles.usersList_input}
                  name="contacts"
                  type="text"
                  value={user.contacts}
                  onChange={(e) =>
                    handleChange(user.id, "contacts", e.target.value)
                  }
                />
              </div>
            </td>

            <td>
              <div className={styles.usersList_content}>
                <input
                  className={styles.usersList_input}
                  value={user.email}
                  name="email"
                  onChange={(e) =>
                    handleChange(user.id, "email", e.target.value)
                  }
                />
              </div>
            </td>

            <td>
              <div className={styles.usersList_content}>
                <input
                  className={styles.usersList_input}
                  value={user.phone}
                  name="phone"
                  onChange={(e) =>
                    handleChange(user.id, "phone", e.target.value)
                  }
                />
              </div>
            </td>

            <td>
              <div className={styles.usersList_content}>
                <input
                  className={styles.usersList_input}
                  value={user.city}
                  name="city"
                  onChange={(e) =>
                    handleChange(user.id, "city", e.target.value)
                  }
                />
              </div>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      <div className={styles.usersList_footer}>
        <ul>
          <li>
            <Button>
              <ArrowLeftIcon/>
            </Button>
          </li>
          <li><Button isPrimary>1</Button></li>
          <li><Button>2</Button></li>
          <li><Button>3</Button></li>
          <li><Button>4</Button></li>
          <li><Button>5</Button></li>
          <li><Button>...</Button></li>
          <li><Button>30000</Button></li>
          <li>
            <Button>
              <ArrowRightIcon/>
            </Button>
          </li>
        </ul>
        <span className={styles.infoMessage}>Показано 1-20 из 30 000 пользователей</span>
      </div>

    </div>
  );
};
