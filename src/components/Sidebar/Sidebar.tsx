import {
    CalendarIcon,
    DocumentIcon,
    GroupIcon,
    HeartIcon,
    HomeIcon,
    LeftArrowIcon,
    NotebookIcon,
    SesttingsIcon,
    ShareIcon,
} from "../icons/Icons";
import style from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <aside className={style.sidebar}>
            <span className={style.circle}></span>
            <nav className={style["nav-section"]} aria-label="main-nav">
                <HomeIcon />
                <GroupIcon />
                <CalendarIcon />
                <ShareIcon />
                <DocumentIcon className={style.active} />
                <NotebookIcon />
                <HeartIcon />
                <LeftArrowIcon />
            </nav>
            <nav
                className={style["nav-section"]}
                style={{ marginTop: "auto" }}
                aria-label="bottom-nav"
            >
                <SesttingsIcon />
                <button className={style["btn-circle"]}>
                    <span>AS</span>
                </button>
            </nav>
        </aside>
    );
};

export default Sidebar;
