import "./positionSummary.css";

export function PositionSummary() {
  return (
    <div className="position-summary">
      <ul>
        <li className="title">
          <span>선호 포지션 (랭크)</span>
        </li>
        <li className="info">
          <div className="icon">
            <img
              src="https://s-lol-web.op.gg/static/images/site/common/icon-mostposition-mid.png?v=1656394103685"
              alt=""
            />
          </div>
          <div className="detail">
            <ul>
              <li className="name">
                <span>탑</span>
              </li>
              <li className="rate">
                <span className="pick">75%</span>
                <span className="win">승률 0%</span>
              </li>
            </ul>
          </div>
        </li>
        <li className="info">
          <div className="icon">
            <img
              src="https://s-lol-web.op.gg/static/images/site/common/icon-mostposition-mid.png?v=1656394103685"
              alt=""
            />
          </div>
          <div className="detail">
            <ul>
              <li className="name">
                <span>탑</span>
              </li>
              <li className="rate">
                <span className="pick">75%</span>
                <span className="win">승률 0%</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
