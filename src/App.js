import { ChatEngine } from "react-chat-engine";
import "./App.css";

function App() {

  const PROJECT_ID = "f421f74b-09aa-4fde-986e-c23f7afd0ec0";
  const USERNAME = "CaleDev";
  const USERSECRET = "2253";


  return (
    <ChatEngine
      height="100vh"
      projectID= {PROJECT_ID}
      userName= {USERNAME}
      userSecret= {USERSECRET}
    />
  );
}

export default App;
