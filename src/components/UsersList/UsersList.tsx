import styles from './UsersList.module.css'

import { useState } from "react";
import {Button} from "../ui/Button/Button.tsx";

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

  return (
    <div className={styles.usersList_wrapper}>
      <table
       className={styles.usersList_table}
      >
        <thead className={styles.usersList_header}>
        <tr>
          <th>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.25 1.5C5.25 1.08579 5.58579 0.75 6 0.75C6.41422 0.75 6.75 1.08579 6.75 1.5V8.68945L8.96973 6.46973C9.26262 6.17683 9.73738 6.17683 10.0303 6.46973C10.3232 6.76262 10.3232 7.23738 10.0303 7.53027L6.53028 11.0303C6.23738 11.3232 5.76262 11.3232 5.46973 11.0303L1.96973 7.53027C1.67684 7.23738 1.67684 6.76262 1.96973 6.46973C2.24433 6.19512 2.67906 6.17766 2.97364 6.41797L3.03028 6.46973L5.25 8.68945V1.5Z" fill="#5F6166"/>
            </svg>
            <span>ID</span>
          </th>
          <th>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.25 1.5C5.25 1.08579 5.58579 0.75 6 0.75C6.41422 0.75 6.75 1.08579 6.75 1.5V8.68945L8.96973 6.46973C9.26262 6.17683 9.73738 6.17683 10.0303 6.46973C10.3232 6.76262 10.3232 7.23738 10.0303 7.53027L6.53028 11.0303C6.23738 11.3232 5.76262 11.3232 5.46973 11.0303L1.96973 7.53027C1.67684 7.23738 1.67684 6.76262 1.96973 6.46973C2.24433 6.19512 2.67906 6.17766 2.97364 6.41797L3.03028 6.46973L5.25 8.68945V1.5Z" fill="#5F6166"/>
            </svg>
            <span>Роль</span>
          </th>
          <th>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.25 1.5C5.25 1.08579 5.58579 0.75 6 0.75C6.41422 0.75 6.75 1.08579 6.75 1.5V8.68945L8.96973 6.46973C9.26262 6.17683 9.73738 6.17683 10.0303 6.46973C10.3232 6.76262 10.3232 7.23738 10.0303 7.53027L6.53028 11.0303C6.23738 11.3232 5.76262 11.3232 5.46973 11.0303L1.96973 7.53027C1.67684 7.23738 1.67684 6.76262 1.96973 6.46973C2.24433 6.19512 2.67906 6.17766 2.97364 6.41797L3.03028 6.46973L5.25 8.68945V1.5Z" fill="#5F6166"/>
            </svg>
            <span>Имя</span>
          </th>
          <th>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.25 1.5C5.25 1.08579 5.58579 0.75 6 0.75C6.41422 0.75 6.75 1.08579 6.75 1.5V8.68945L8.96973 6.46973C9.26262 6.17683 9.73738 6.17683 10.0303 6.46973C10.3232 6.76262 10.3232 7.23738 10.0303 7.53027L6.53028 11.0303C6.23738 11.3232 5.76262 11.3232 5.46973 11.0303L1.96973 7.53027C1.67684 7.23738 1.67684 6.76262 1.96973 6.46973C2.24433 6.19512 2.67906 6.17766 2.97364 6.41797L3.03028 6.46973L5.25 8.68945V1.5Z" fill="#5F6166"/>
            </svg>
            <span>Логин</span>
          </th>
          <th>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.25 1.5C5.25 1.08579 5.58579 0.75 6 0.75C6.41422 0.75 6.75 1.08579 6.75 1.5V8.68945L8.96973 6.46973C9.26262 6.17683 9.73738 6.17683 10.0303 6.46973C10.3232 6.76262 10.3232 7.23738 10.0303 7.53027L6.53028 11.0303C6.23738 11.3232 5.76262 11.3232 5.46973 11.0303L1.96973 7.53027C1.67684 7.23738 1.67684 6.76262 1.96973 6.46973C2.24433 6.19512 2.67906 6.17766 2.97364 6.41797L3.03028 6.46973L5.25 8.68945V1.5Z" fill="#5F6166"/>
            </svg>
            <span>Должность</span>
          </th>
          <th>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.25 1.5C5.25 1.08579 5.58579 0.75 6 0.75C6.41422 0.75 6.75 1.08579 6.75 1.5V8.68945L8.96973 6.46973C9.26262 6.17683 9.73738 6.17683 10.0303 6.46973C10.3232 6.76262 10.3232 7.23738 10.0303 7.53027L6.53028 11.0303C6.23738 11.3232 5.76262 11.3232 5.46973 11.0303L1.96973 7.53027C1.67684 7.23738 1.67684 6.76262 1.96973 6.46973C2.24433 6.19512 2.67906 6.17766 2.97364 6.41797L3.03028 6.46973L5.25 8.68945V1.5Z" fill="#5F6166"/>
            </svg>
            <span>Контакты</span>
          </th>
          <th>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.25 1.5C5.25 1.08579 5.58579 0.75 6 0.75C6.41422 0.75 6.75 1.08579 6.75 1.5V8.68945L8.96973 6.46973C9.26262 6.17683 9.73738 6.17683 10.0303 6.46973C10.3232 6.76262 10.3232 7.23738 10.0303 7.53027L6.53028 11.0303C6.23738 11.3232 5.76262 11.3232 5.46973 11.0303L1.96973 7.53027C1.67684 7.23738 1.67684 6.76262 1.96973 6.46973C2.24433 6.19512 2.67906 6.17766 2.97364 6.41797L3.03028 6.46973L5.25 8.68945V1.5Z" fill="#5F6166"/>
            </svg>
            <span>Почта</span>
          </th>
          <th>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.25 1.5C5.25 1.08579 5.58579 0.75 6 0.75C6.41422 0.75 6.75 1.08579 6.75 1.5V8.68945L8.96973 6.46973C9.26262 6.17683 9.73738 6.17683 10.0303 6.46973C10.3232 6.76262 10.3232 7.23738 10.0303 7.53027L6.53028 11.0303C6.23738 11.3232 5.76262 11.3232 5.46973 11.0303L1.96973 7.53027C1.67684 7.23738 1.67684 6.76262 1.96973 6.46973C2.24433 6.19512 2.67906 6.17766 2.97364 6.41797L3.03028 6.46973L5.25 8.68945V1.5Z" fill="#5F6166"/>
            </svg>
            <span>Телефон</span>
          </th>
          <th>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.25 1.5C5.25 1.08579 5.58579 0.75 6 0.75C6.41422 0.75 6.75 1.08579 6.75 1.5V8.68945L8.96973 6.46973C9.26262 6.17683 9.73738 6.17683 10.0303 6.46973C10.3232 6.76262 10.3232 7.23738 10.0303 7.53027L6.53028 11.0303C6.23738 11.3232 5.76262 11.3232 5.46973 11.0303L1.96973 7.53027C1.67684 7.23738 1.67684 6.76262 1.96973 6.46973C2.24433 6.19512 2.67906 6.17766 2.97364 6.41797L3.03028 6.46973L5.25 8.68945V1.5Z" fill="#5F6166"/>
            </svg>
            <span>Город</span>
          </th>
        </tr>
        </thead>

        <tbody className={styles.usersList_body}>
        {users.map((user) => (
          <tr key={user.id} className={styles.usersList_item}>
            <td>{user.id}</td>

            <td>
              <input
                value={user.role}
                onChange={(e) =>
                  handleChange(user.id, "role", e.target.value)
                }
              />
            </td>

            <td>
              <input
                value={user.userName}
                onChange={(e) =>
                  handleChange(user.id, "userName", e.target.value)
                }
              />
            </td>

            <td>
              <input
                value={user.login}
                onChange={(e) =>
                  handleChange(user.id, "login", e.target.value)
                }
              />
            </td>

            <td>
              <select
                value={user.jobTitle}
                onChange={(e) =>
                  handleChange(user.id, "jobTitle", e.target.value)
                }
              >
                {jobsData.map((job) => (
                  <option key={job} value={job}>
                    {job}
                  </option>
                ))}
              </select>
            </td>

            <td>
              <input
                value={user.contacts}
                onChange={(e) =>
                  handleChange(user.id, "contacts", e.target.value)
                }
              />
            </td>

            <td>
              <input
                value={user.email}
                onChange={(e) =>
                  handleChange(user.id, "email", e.target.value)
                }
              />
            </td>

            <td>
              <input
                value={user.phone}
                onChange={(e) =>
                  handleChange(user.id, "phone", e.target.value)
                }
              />
            </td>

            <td>
              <input
                value={user.city}
                onChange={(e) =>
                  handleChange(user.id, "city", e.target.value)
                }
              />
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
