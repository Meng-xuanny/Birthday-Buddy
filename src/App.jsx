import { useState } from "react";
import data from "./data";
import List from "./components/List";

const App = () => {
  const [birthday, setBirthday] = useState(data);

  return (
    <section className="container">
      <List birthday={birthday} />
      <button className="btn btn-block" onClick={() => setBirthday([])}>
        Clear all
      </button>
    </section>
  );
};
export default App;
