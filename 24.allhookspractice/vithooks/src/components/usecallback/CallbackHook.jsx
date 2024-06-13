// The React useCallback Hook returns a memoized callback function.

import { useCallback, useState } from "react";
import Todos from "./Todos";
import styled from "styled-components";

const Callbackhook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    return setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);

  return (
    <Wrapper>
      <Todos todos={todos} addTodo={addTodo} />
      <hr
        style={{
          height: "10px",
          backgroundColor: "#111", // black color
          border: "none", // removes default border
          margin: "20px 0", // vertical margin
          width: "80%", // width of the horizontal rule
          borderRadius: "5px", // rounded corners
        }}
      />{" "}
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Callbackhook;
