import styles from './UsersList.module.css'

import { useState } from "react";

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
    </div>
  );
};
