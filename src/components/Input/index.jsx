import style from "./style.module.scss";

export default function Input() {
  return (
      <input type="text" placeholder="Digite o nome do estado" className={style.input}/>
  );
}
