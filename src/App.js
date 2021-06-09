import "./style/global.scss";
import style from "./style/app.module.scss";
import Input from "./components/Input";
import Card from "./components/Card";

function App() {
  return (
    <div className={style.container}>
      <div className={style.search}>
        <h1>Estatisticas - COVID 19</h1>
        <Input />
      </div>

      <div className={style.row_state}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
