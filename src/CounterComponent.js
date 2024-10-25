import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./Actions";

const CounterComponent = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", margin: "20px", padding: "20px", border: "2px solid #fdedec ", borderRadius: "10px", backgroundColor: "#fadbd8 " }}>
      <h1 style={{ color: "#4A90E2", fontSize: "2rem" }}>Contador: {count}</h1>
      <div>
        <button
          onClick={() => dispatch(decrement())}
          style={{ margin: "10px", padding: "10px 20px", border: "none", borderRadius: "5px", backgroundColor: "#f5b041", color: "white", cursor: "pointer" }}
        >
          Decrementar
        </button>
        <button
          onClick={() => dispatch(increment())}
          style={{ margin: "10px", padding: "10px 20px", border: "none", borderRadius: "5px", backgroundColor: "#eb984e", color: "white", cursor: "pointer" }}
        >
          Incrementar
        </button>
        <button
          onClick={() => dispatch(reset())}
          style={{ margin: "10px", padding: "10px 20px", border: "none", borderRadius: "5px", backgroundColor: "#dc7633", color: "white", cursor: "pointer" }}
        >
          Restablecer
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;
