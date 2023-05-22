import "./styles.css";
import { IMAJES, BACKGROUNT } from "./Action";
export default function App() {
  return (
    <div className="container-fluid position-relative">
      <select
        className="form-select form-select-sm"
        ariaabel=".form-select-sm example"
      >
        <option selected>Open this select menu</option>
        {BACKGROUNT.map((x) => (
          <option value={x.name}>{x.name}</option>
        ))}
      </select>
      {BACKGROUNT.map((x) => (
        <div>{x.name}</div>
      ))}
    </div>
  );
}
