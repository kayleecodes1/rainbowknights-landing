import './App.scss';

const App: React.FC = () => {
    return (
        <div className="App">
            <header>
                <div className="container">
                    <div className="Logo">Rainbow Knights</div>
                    <div className="Meta">
                        <h1 className="Meta__title">Rainbow Knights</h1>
                        <p className="Meta__description">
                            Connecting, nurturing, and supporting Stoughton-area
                            queers 🌈
                        </p>
                    </div>
                </div>
            </header>
            <main>
                <section className="Connect">
                    <div className="container">
                        <ul className="SocialList">
                            <li className="SocialList__item">
                                <a
                                    className="SocialList__link SocialList__link--instagram"
                                    target="_blank"
                                    href="https://www.instagram.com/stoughtonpride"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li className="SocialList__item">
                                <a
                                    className="SocialList__link SocialList__link--facebook"
                                    target="_blank"
                                    href="https://www.facebook.com/profile.php?id=61572273041024"
                                >
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="Resources">
                    <div className="container">
                        <ul className="ResourceList">
                            <li className="ResourceList__item">
                                <a
                                    className="ResourceList__link"
                                    target="_blank"
                                    href="https://docs.google.com/document/d/1yDdy_H-ylwU5z5qjhucOJtZRT2GTMfniWuQ6tdzTxT4/edit?tab=t.0#heading=h.r9nrc14fnl6y"
                                >
                                    About the Rainbow Knights
                                </a>
                            </li>
                            <li className="ResourceList__item">
                                <a
                                    className="ResourceList__link"
                                    target="_blank"
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSedVhpiIZo763_0-5K83t2F8zOoVvQsqIfVAXBINnPLb0nanA/viewform"
                                >
                                    Sign up for our mailing list
                                </a>
                            </li>
                            <li className="ResourceList__item">
                                <a
                                    className="ResourceList__link"
                                    target="_blank"
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSf8ghOCA9rcb9bkolLSxA6TD8x0dBZLQ3NYXM_wwK9chnq8CA/viewform"
                                >
                                    Join our Discord Server
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
            <footer className="Copyright">
                <div className="container">
                    <p>&copy; 2025 Rainbow Knights. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
