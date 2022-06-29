import "./autoComplete.css";
import { AutoCompleteItem } from "./AutoCompleteItem";

export function AutoComplete() {
  return (
    <div className="auto-complete">
      <div className="list">
        <ul>
          <AutoCompleteItem />
          <AutoCompleteItem />
          <AutoCompleteItem />
          <AutoCompleteItem />
        </ul>
      </div>
    </div>
  );
}
