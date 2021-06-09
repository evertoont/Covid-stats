import style from "./style.module.scss";

export default function Card() {
  return (
    <div className={style.container}>
      <div className={style.state}>
        <h2>São Paulo - SP</h2>
      </div>
      <div className={style.cases}>
        <p>Casos</p>
        <span>99999</span>
      </div>
      <div className={style.deaths}>
        <p>Mortes</p>
        <span>99999</span>
      </div>
      <div className={style.suspects}>
        <p>Suspeitos</p>
        <span>99999</span>
      </div>
      <div className={style.refuses}>
        <p>Recuperados</p>
        <span>99999</span>
      </div>
    </div>
  );
}
