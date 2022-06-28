import "./autoComplete.css";

export function AutoCompleteItem() {
  return (
    <li className="item">
      <a>
        <div className="avatar-36">
          <img
            src="https://opgg-static.akamaized.net/images/profile_icons/profileIcon505.jpg"
            alt=""
          />
        </div>
        <div className="info">
          <div className="username">
            <span>자메이카의영혼</span>
          </div>
          <div className="level">
            <span>Level 38</span>
          </div>
        </div>
      </a>
    </li>
  );
}
