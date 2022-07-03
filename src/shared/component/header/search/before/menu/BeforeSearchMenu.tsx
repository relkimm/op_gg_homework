import { useAtom } from "jotai";
import { activeMenuAtom, Menu } from "./beforeSearchMenu.atom";
import "./beforeSearchMenu.css";

export function BeforeSearchMenu() {
  const [activeMenu, setActiveMenu] = useAtom(activeMenuAtom);

  const activeStyle = (menu: Menu) => {
    return menu === activeMenu ? "active" : "";
  };

  const onClickMenu = (menu: Menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="menu">
      <button
        className={activeStyle("recent")}
        onClick={() => onClickMenu("recent")}
      >
        최근검색
      </button>
      <button
        className={activeStyle("bookmark")}
        onClick={() => onClickMenu("bookmark")}
      >
        즐겨찾기
      </button>
    </div>
  );
}
