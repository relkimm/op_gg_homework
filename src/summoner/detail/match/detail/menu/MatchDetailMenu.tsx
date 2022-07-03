import { useAtom } from "jotai";
import { activeMenuAtom, Menu } from "./matchDetailMenu.atom";
import "./matchDetailMenu.css";

export function MatchDetailMenu() {
  const [activeMenu, setActiveMenu] = useAtom(activeMenuAtom);

  const activeStyle = (menu: Menu) => {
    return menu === activeMenu ? "active" : "";
  };

  const onClickMenu = (menu: Menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="menu">
      <ul>
        <li className={activeStyle("all")} onClick={() => onClickMenu("all")}>
          <span>전체</span>
        </li>
        <li className={activeStyle("solo")} onClick={() => onClickMenu("solo")}>
          <span>솔로게임</span>
        </li>
        <li className={activeStyle("team")} onClick={() => onClickMenu("team")}>
          <span>자유랭크</span>
        </li>
      </ul>
    </div>
  );
}
