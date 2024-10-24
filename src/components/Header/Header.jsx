import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className="container">
                    <div className="wrap">
                        <div className="dream">
                            <h1>С помощью верстки <br />
                                я создам ту жизнь, о которой <br />
                                <span>мечтаю!</span>
                            </h1>
                            <p>Мои стремления + настойчивость позволят мне <br/> достичь чего угодно. Я не верю в это. Я знаю <br /> это на 100%. Меня не остановить!
                            </p>
                            <button className="btn">Двигаться к мечте!</button>
                        </div>

                        <img src="https://abbos29.github.io/dream/img/main.png" alt="" className="logo" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header