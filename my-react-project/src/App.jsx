import React from 'react';

function getTitle(title) {
  return title;
}

const list = [
  {
    title: 'React',
    url: 'https://react.dev/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'Presso',
    url: 'https://presso.js.org/',
    author: 'Jake Boateng, Liz Boateng',
    num_comments: 144,
    points: 12,
    objectID: 2,
  },
];

function App() {
  return (
    <div>
      <h1>Hello {getTitle('React')}</h1>
      <h2>Abompe Brodie Stories</h2>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      <ul>
        {list.map((item) => (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>{" "}
            | <span>{item.author}</span>{" "}
            | <span>Comments: {item.num_comments}</span>{" "}
            | <span>Points: {item.points}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
