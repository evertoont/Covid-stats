import { useEffect, useState } from "react";
import style from "./style/app.module.scss";
import Input from "./components/Input";
import Card from "./components/Card";
import Loading from "./components/Loading";
import Api from "./services/api";

import "./style/global.scss";

function App() {
  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    Api.get().then((response) => {
      setStateList(response.data.data);
    });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.search}>
        <h1>Estatisticas - COVID 19</h1>
        <Input />
      </div>

      <div className={style.row_state}>
        {stateList.length > 0 ? (
          stateList.map((data) => {
            return (
              <Card
                key={data.uid}
                state={data.state}
                uf={data.uf}
                cases={data.cases}
                deaths={data.deaths}
                suspects={data.suspects}
                refuses={data.refuses}
              />
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default App;
