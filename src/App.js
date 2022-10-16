import SearchAppBar from "./components/Header";
import RicettaList from "./components/RicetteList";
import FooterFavorites from "./components/Footer";

function App() {
  return (
    <div>
      <SearchAppBar />
      <RicettaList />
      <FooterFavorites />
    </div>
  );
}

export default App;
