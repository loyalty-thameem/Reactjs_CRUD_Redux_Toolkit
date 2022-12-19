import "bootstrap/dist/css/bootstrap.min.css";
import { Todolist } from "./components/Todolist";

export default function App() {
  return (
    <div className=" px-5 py-3 d-flex flex-column justify-content-center align-items-center">
      <Todolist />
    </div>
  );
}
