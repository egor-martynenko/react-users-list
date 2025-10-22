import styles from './UsersList.module.css'

import { useState } from "react";
import {Button} from "../ui/Button/Button.tsx";
import {ArrowIcon} from "../../assets/svg/ArrowIcon.tsx";
import {Ellipsis} from "../../assets/svg/Ellipsis.tsx";
import {DropdownList} from "../ui/DropdownList /DropdownList.tsx";

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
  },
  {
    id: 45678,
    role: "Пользователь",
    userName: "Дмитрий",
    login: "backendDev",
    jobTitle: "Back End разработчик",
    contacts: "@dmitry_backend",
    email: "dmitry@company.ru",
    phone: "+79997776655",
    city: "Новосибирск",
  },
  {
    id: 56789,
    role: "Модератор",
    userName: "Екатерина",
    login: "dataScientist",
    jobTitle: "Data Scientist",
    contacts: "@kate_science",
    email: "kate@company.ru",
    phone: "+79996665544",
    city: "Екатеринбург",
  },
  {
    id: 67890,
    role: "Пользователь",
    userName: "Андрей",
    login: "qaEngineer",
    jobTitle: "QA-инженер",
    contacts: "@andrey_qa",
    email: "andrey@company.ru",
    phone: "+79995554433",
    city: "Казань",
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.5303 17.4697C14.8232 17.7626 14.8232 18.2374 14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303L7.46972 12.5303C7.17683 12.2374 7.17683 11.7626 7.46972 11.4697L13.4697 5.46973C13.7626 5.17684 14.2374 5.17684 14.5303 5.46973C14.8232 5.76262 14.8232 6.23738 14.5303 6.53028L9.06054 12L14.5303 17.4697Z" fill="#FAFCFF"/>
              </svg>
            </Button>
          </li>
          <li><Button>1</Button></li>
          <li><Button>2</Button></li>
          <li><Button>3</Button></li>
          <li><Button>4</Button></li>
          <li><Button>5</Button></li>
          <li><Button>...</Button></li>
          <li><Button>30000</Button></li>
          <li>
            <Button>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.46973 6.53027C9.17684 6.23738 9.17684 5.76262 9.46973 5.46972C9.76262 5.17683 10.2374 5.17683 10.5303 5.46972L16.5303 11.4697C16.6709 11.6104 16.75 11.8011 16.75 12C16.75 12.1989 16.6709 12.3896 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76262 18.8232 9.46973 18.5303C9.17684 18.2374 9.17684 17.7626 9.46973 17.4697L14.9395 12L9.46973 6.53027Z" fill="#FAFCFF"/>
              </svg>
            </Button>
          </li>
        </ul>
        <span>Показано 1-20 из 30 000 пользователей</span>
      </div>

    </div>
  );
};
