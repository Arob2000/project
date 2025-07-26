import React, { useState, useEffect } from 'react';


export function Video11Example({ isLoggedIn }) {
  return <div>{isLoggedIn && <h1>Welcome Back</h1>}</div>;
}

export function Video12Example({ isAdmin }) {
  return <h1>{isAdmin ? 'Admin Dashboard' : 'User Home'}</h1>;
}

export function Video13Example() {
  const users = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Ahmad' },
  ];
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export function Video14Example() {
  useEffect(() => {
    console.log('Component Mounted');
  }, []);
  return <p>Check the console log</p>;
}

export function Video15Example() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <p>Seconds: {seconds}</p>;
}

export function Video16Example() {
  const inputRef = React.useRef();
  const focusInput = () => inputRef.current.focus();

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export function Video17Example() {
  const renderCount = React.useRef(0);
  const [value, setValue] = useState('');

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>Rendered {renderCount.current} times</p>
    </div>
  );
}

export function Video18Example() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible((v) => !v)}>Toggle</button>
      {visible && <p>This is visible</p>}
    </div>
  );
}

export function Video19Example() {
  const options = ['React', 'Vue', 'Angular'];
  const [selected, setSelected] = useState([]);

  const toggleOption = (option) => {
    setSelected((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => toggleOption(option)}
          />
          {option}
        </label>
      ))}
      <p>Selected: {selected.join(', ')}</p>
    </div>
  );
}

export function Video20Example() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <p>Double: {num * 2}</p>
    </div>
  );
}
