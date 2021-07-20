import React, { useState } from "react";
import initialData from ".//utils/store";
import Card from ".//components/Card";

const App = () => {
  const [data, setData] = useState(initialData);
  return (
    <React.Fragment>
      <Card data={data} />
    </React.Fragment>
  );
};

export default App;
