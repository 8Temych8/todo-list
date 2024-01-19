import DropDownList from "./DropDownList";
import Search from "./Search";
import './Header.css'

const Header = () => {

    return (
        <div className="Header">
            <Search />
            <DropDownList />
            <button id="theme-switch"></button>
        </div>
    )
}

export default Header;