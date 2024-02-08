import DropDownList from "./DropDownList";
import Search from "./Search";
import './Header.css'
import ThemeSwitchBtn from "./ThemeSwitchBtn";

const Header = () => {

    return (
        <div className="Header">
            <Search />
            <DropDownList />
            <ThemeSwitchBtn />
        </div>
    )
}

export default Header;