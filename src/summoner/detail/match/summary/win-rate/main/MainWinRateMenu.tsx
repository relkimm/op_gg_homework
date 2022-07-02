import { useAtom } from "jotai";
import { activeMenuAtom, Menu } from "./mainWinRate.atom";

export function MainWinRateMenu() {
  const [activeMenu, setActiveMenu] = useAtom(activeMenuAtom);

  const activeStyle = (menu: Menu) => {
    return activeMenu === menu ? "active" : "";
  };

  const onClickMenu = (menu: Menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="win-rate-menu">
      <ul>
        <li
          className={activeStyle("champ")}
          onClick={() => onClickMenu("champ")}
        >
          챔피언 승률
        </li>
        <li className={activeStyle("rank")} onClick={() => onClickMenu("rank")}>
          7일간 랭크 승률
        </li>
      </ul>
    </div>
  );
}
