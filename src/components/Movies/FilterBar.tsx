import axios from "axios";
import { useEffect, useState } from "react";

interface Genra {
  name: string;
}

const GenraButton = ({ name }: Genra) => {
  return <button className="filter-btn fw-medium">{name}</button>;
};

const FilterBar = () => {
  const [genras, setGenras] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/cinema/get_generes/")
      .then((res) => {
        setGenras(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div style={{ width: "13rem" }} className="me-2 filter">
        <h5 className="filter-text">Filter by Genra</h5>
        <div className="d-flex flex-column">

          {genras
            ? genras.map((genra) => {
                return <GenraButton name={genra} key={genra}/>;
              })
            : <h6>Genra not avoilable</h6>}
        </div>
      </div>
    </>
  );
};

export default FilterBar;
