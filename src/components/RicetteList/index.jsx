import MultiActionAreaCard from "../Ricetta";
import { useSelector, useDispatch } from "react-redux";
import { fetchRicette } from "../../redux/features/ricetteLoad";
import {
  selectAllRecepies,
  getRecepiesLoading,
  getRecepiesError,
} from "../../redux/features/ricetteLoad";
import { useEffect } from "react";

const RicettaList = () => {
  const numOfRicette = useSelector(selectAllRecepies);
  // const numOfRicette = useSelector((state) => state.ricetta);
  console.log(numOfRicette);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRicette());
  }, []);

  let content;
  if (!getRecepiesLoading) {
    content = <p>🍝 Caricamento...</p>;
  } else if (getRecepiesLoading) {
    content = numOfRicette.map((ricetta) => (
      <MultiActionAreaCard key={numOfRicette.id} ricetta={ricetta} />
    ));
  }
  return <>{content}</>;
};

export default RicettaList;
