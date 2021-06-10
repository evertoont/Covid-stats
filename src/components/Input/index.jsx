import { useContext } from "react";
import { MyContext } from "../../context/InputContext";
import style from "./style.module.scss";

export default function Input() {
  const state = useContext(MyContext);

  return (
    <input
      type="text"
      placeholder="Digite o nome do estado"
      className={style.input}
      onChange={(event) => state.setStateInput(event.target.value)}
    />
  );
}
