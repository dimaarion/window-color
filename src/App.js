import "./styles.css";
import { useEffect, useState } from "react";
import { IMAJES, BACKGROUNT } from "./Action";
export default function App() {
  const [bgImage, setBgImage] = useState(
    "https://pvtest.ru/wp-content/uploads/7/1/d/71d834105cd03573af32c141272908eb.jpeg"
  );
  return (
    <div className="container-fluid position-relative">
      <select
        className="form-select form-select-sm"
        ariaabel=".form-select-sm example"
        onChange={(e) => setBgImage(e.target.value)}
      >
        <option selected>Фон</option>
        {BACKGROUNT.map((x) => (
          <option key={x.id + "bg"} value={x.img}>
            {x.name}
          </option>
        ))}
      </select>
      <img className="w-100" src={bgImage} />
    </div>
  );
}
