export default function App() {
    return (
        <>
            <div className="background"></div>
            <div className="content">
                <h1 className="title">Trekbag</h1>
                <main className="container">
                    <section className="container__header">
                        <section className="circles">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </section>
                        <div className="number-of-packed-item"><span className="u-bold">1</span> / 3 items packed</div>
                    </section>
                    <section className="container__main">
                        <section className="list-zone">
                            <div className="filter-zone">
                                <select className="filter">
                                    <option className="filter-choice">Sort by default</option>
                                    <option className="filter-choice">Sort by packed</option>
                                    <option className="filter-choice">Sort by unpacked</option>
                                </select>
                            </div>
                            <div className="list-of-items">
                                <ul className="items">
                                    <li className="item">
                                        <div className="tick-icon"></div>
                                        <p className="item-text">passport</p>
                                        <i className="fa-solid fa-xmark cross-symbol"></i>
                                    </li>
                                    <li className="item">
                                        <div className="tick-icon tick-icon--active"></div>
                                        <p className="item-text">phone charger</p>
                                        <i className="fa-solid fa-xmark cross-symbol"></i>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section className="commands-zone">
                            <h2 className="secondary-header">Add an item</h2>
                            <input type="text" className="input" placeholder="Toothbrush..." />
                            <button className="btn primary-btn">Add to list</button>
                            <section className="secondary-buttons">
                                <button className="btn secondary-btn">Mark all as complete</button>
                                <button className="btn secondary-btn">Mark all as incomplete</button>
                                <button className="btn secondary-btn">Reset to initial</button>
                                <button className="btn secondary-btn">Remove all items</button>
                            </section>
                        </section>
                    </section>
                </main>
                <footer className="footer">
                    <small className="copyright">&copy; 2050 Copyright by ByteGrad.</small>
                    <small className="version">Version <span className="u-bold">1.5</span></small>
                </footer>
            </div>
        </>
    )
}