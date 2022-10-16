import MultiActionAreaCard from "../Ricetta";
import { useSelector, useDispatch } from "react-redux";
import { fetchRicette } from "../../redux/features/ricetteLoad";
import { useEffect } from "react";

const RicettaList = () => {
  const numOfRicette = useSelector((state) => state.ricetta);
  // console.log(numOfRicette);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRicette);
  }, []);

  return (
    <>
      {numOfRicette.loading && <div>🍝 Caricamento... </div>}
      {!numOfRicette.loading && numOfRicette.error ? <div>Errore</div> : null}
      {!numOfRicette.loading && numOfRicette.ricette.length ? (
        <div>
          {numOfRicette.ricette.map((ricetta) => (
            <MultiActionAreaCard
              key={numOfRicette.id}
              numOfRicette={numOfRicette}
            />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default RicettaList;
