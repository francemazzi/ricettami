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

  return <>{content}</>;
};

export default RicettaList;
