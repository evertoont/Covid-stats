import style from "./style.module.scss";

export default function Card(props) {
  const { state, uf, cases, deaths, suspects, refuses } = props;

  return (
    <div className={style.container}>
      <div className={style.state}>
        <h2>
          {state} - {uf}
        </h2>
      </div>
      <div className={style.cases}>
        <p>Casos</p>
        <span>{cases}</span>
      </div>
      <div className={style.deaths}>
        <p>Mortes</p>
        <span>{deaths}</span>
      </div>
      <div className={style.suspects}>
        <p>Suspeitos</p>
        <span>{suspects}</span>
      </div>
      <div className={style.refuses}>
        <p>Recuperados</p>
        <span>{refuses}</span>
      </div>
    </div>
  );
}
