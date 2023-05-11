'use client';
import { useState } from 'react';

export default function Home() {
  const numbers = [1, 2, 3, 4];
  const works = numbers.map((number) => <li key={number}>{number}</li>);
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <main>
      <h1>HomePage</h1>
      <ul>{works}</ul>
      {count}
      <button onClick={handleClick}>カウントアップ</button>
    </main>
  );
}
