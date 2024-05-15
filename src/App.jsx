import {signal} from '@preact/signals-react';
import {useCallback} from 'react';

const Child = () => {
  console.log('Child rerender');
  return <div>child</div>;
};

const count = signal(0);

const Counter = ({children}) => (
  <div>
    Count: {count}
    <br />
    {children}
  </div>
);

const App = () => {
  // const count = useSignal(0);
  console.log('App rerender');

  const cb = useCallback(() => {
    console.log('before:', count.value);
    count.value++;
    console.log('after:', count.value);
  }, []);

  return <>
    <div>
      App count: {count}
    </div>
    <Counter>
      {count}
    </Counter>
    <button onClick={() => count.value++}>Click</button>
    <button onClick={cb}>Callback</button>
    <Child />
  </>;
};

export default App;
