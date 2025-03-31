import { useState } from 'react'
import React from 'react'
import { HeaderDate } from './components/HeaderDate'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Декларативный подход
export default function App() {
  const [count, setCount] = useState(0)

  return React.createElement(React.Fragment,
    null,
    [
      React.createElement('div', {key: 'links'}, [
        React.createElement('a', {href:'https://vite.dev', target: '_blank', key: 'vite'},
          React.createElement('img', {src: viteLogo, className: 'logo', alt: 'Vite logo'})
        ),
        React.createElement('a', {href:'https://react.dev', target: '_blank', key: 'react'},
          React.createElement('img', {src: reactLogo, className: 'logo react', alt: 'React logo'})
        )
      ]),
      React.createElement('h1', {key: 'title'}, 'Vite + React'),
      React.createElement('div', {key: 'card', className: 'card'},
        [
          React.createElement('button', {onClick: () => setCount((count) => count +1), key: 'button'}, `count is ${count}`),
          React.createElement('p', {key: 'tip'}, 'Edit <code>src/App.jsx</code> and save to test HMR')
        ],
        React.createElement('p', {key: 'docs', className: 'read-the-docs'}, 'Click on the Vite and React logos to learn more'),
        React.createElement(HeaderDate, null)
      )
    ],)

  //Декларативный подход
  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //     <HeaderDate />
  //   </>
  // )
}
