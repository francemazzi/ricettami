import RicettaCard from "../Ricetta";
import { useSelector, useDispatch } from "react-redux";
import { fetchRicette } from "../../redux/features/ricetteLoad";
// import {
//   selectAllRecepies,
//   getRecepiesLoading,
//   getRecepiesError,
// } from "../../redux/features/ricetteLoad";
import { useEffect } from "react";

const RicettaList = () => {
  const dispatch = useDispatch();
  const numOfRicette = useSelector((state) => state.ricetta.ricette);

  useEffect(() => {
    dispatch(fetchRicette());
  }, [dispatch]);

  const content = numOfRicette.map((ricetta) => (
    <RicettaCard key={ricetta.id} ricetta={ricetta} />
  ));

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {content}
      </div>
    </>
  );
};

export default RicettaList;
