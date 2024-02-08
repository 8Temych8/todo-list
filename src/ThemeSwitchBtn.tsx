import { useState } from 'react';
import './ThemeSwitchBtn.css'

const ThemeSwitchBtn = () => {

    const [currentTheme, setCurrentTheme] = useState('Light');

    const handleClick = () => {
        if (currentTheme === 'Light') {
            setCurrentTheme('Night');
            console.log('Current theme night')
            document.body.classList.add('night-theme')

        }
        if (currentTheme === 'Night') {
            setCurrentTheme('Light');
            console.log('Current theme light')
            document.body.classList.remove('night-theme')
        }
    }


    return (
        <div >
            <button onClick={handleClick} className={(currentTheme + ' deflt-btn')}></button>
        </div>
    )
}

export default ThemeSwitchBtn;