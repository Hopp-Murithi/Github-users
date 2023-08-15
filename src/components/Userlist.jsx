import React, { useEffect, useState } from "react";

// The api url
const url = "https://api.github.com/users";

const Userlist = () => {
  const [users, setUsers] = useState([]);
  /**
   * fetch data using the useEffect hook and parse into json.
   * Also set the new state to contain fetched data
   * The depenedency array is set to empty to that it does not re-render
   */
  useEffect(() => {
    try {
      const getUsers = async () => {
        const results = await fetch(url);
        const users = await results.json();
        setUsers(users);
      };
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <main>
      <h3 className="logo">Github users</h3>
      <section className="user-details">
        {/* Iterate over the list of users and get the values needed to be displayed */}
        <ul className="users-list">
          {users.map((user) => {
            const { id, login, avatar_url, html_url } = user;
            return (
              <li key={id} className="user-info">
                <div className="user-content">
                  <img src={avatar_url} alt={login} className="img" />
                  <h4 className="card-text">{login}</h4>
                </div>
                <button className="clear-btn">
                  <a href={html_url}>View profile</a>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default Userlist;
