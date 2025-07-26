import React, { useState, useEffect } from 'react';

export function Video1Example() {
  return <h1>Hello React!</h1>;
}

export function Video2Example({ name }) {
  return <h2>Welcome, {name}!</h2>;
}

export function Video3Example() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export function Video4Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Clicked ${count}`;
  }, [count]);

  return <button onClick={() => setCount(c => c + 1)}>+</button>;
}

export function Video5Example() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export function Video6Example() {
  const items = ['Apple', 'Banana', 'Cherry'];
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}

export function Video7Example() {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert('Submitted: ' + value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}


export function Video8Example() {
  function Child({ text }) {
    return <p>{text}</p>;
  }
  return (
    <div>
      <Child text="Hello from Child" />
      <Child text="Another Child" />
    </div>
  );
}


export function Video10Example() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      {isLogged ? <p>Welcome back!</p> : <p>Please log in.</p>}
      <button onClick={() => setIsLogged(prev => !prev)}>Toggle</button>
    </div>
  );
}