import {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return <>
    <div>
      App count: {count}
    </div>
    <button onClick={() => setCount(count + 1)}>Click</button>
  </>;
};

export default App;
