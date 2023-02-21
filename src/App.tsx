import { MainPage } from "./pages/MainPage";
import Logo from "./assets/logo.png";

const App = () => {
  return (
    <div className="flex flex-col h-full bg-brutal-pink overflow-auto">
      <div className="flex align-center justify-center mt-16">
        <img src={Logo} width={250} />
      </div>
      <div className="mt-8">
        <MainPage />
      </div>
    </div>
  );
};

export default App;
