import React from 'react'
import './Section.css'

const Section = () => {
    return (
        <>
            <section className="info">
                <div className="container">
                    <h2>Что меня ждет впереди</h2>
                    <div className="wrap">
                        <div className="card">
                            <img src="https://abbos29.github.io/dream/img/icon1.png" alt="" />
                            <h3>Свободное время</h3>
                            <p>Мне нужно свободное время на семью и самое настоящее</p>
                        </div>

                        <div className="card">
                            <img src="https://abbos29.github.io/dream/img/icon2.png" alt="" />
                            <h3>Яркие путешествия </h3>
                            <p>Работать откуда угодно - что может быть лучше?</p>
                        </div>

                        <div className="card">
                            <img src="https://abbos29.github.io/dream/img/icon3.png" alt="" />
                            <h3>Создание ценности</h3>
                            <p>Нет ничего сильнее, чем жить не просто так, создавая ценность</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="order">
                <div className="container">
                    <h2>Форма заказа билета в будущее </h2>
                    <div className="order_input">
                        <form action="">
                        <input type="text" placeholder='Имя' />
                        <input type="email" placeholder='E-mail'/>
                        <input type="text" placeholder='Phone' />
                        <input type="text" placeholder='Страна' />
                        <button className="btn">Двигаться к мечте!</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section