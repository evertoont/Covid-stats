import { useContext, useEffect, useState } from "react";
import style from "./style/app.module.scss";
import Input from "./components/Input";
import Card from "./components/Card";
import Loading from "./components/Loading";
import Api from "./services/api";
import { MyContext } from "./context/InputContext";

import "./style/global.scss";

function App() {
  const [stateList, setStateList] = useState([]);
  const state = useContext(MyContext);

  useEffect(() => {
    Api.get().then(({ data }) => {
      setStateList(data.data);
    });
  }, []);

  const stateInLowerCase = state.stateInput.toLowerCase();

  const stateFilteredName = stateList.filter((data) =>
    data.state.toLowerCase().includes(stateInLowerCase)
  );

  return (
    <main className={style.container}>
      <section className={style.search}>
        <h1>Estatisticas - COVID 19</h1>
        <Input />
      </section>

      <div className={style.row_state}>
        {stateList.length > 0 ? (
          stateFilteredName.map((data) => {
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
    </main>
  );
}

export default App;
