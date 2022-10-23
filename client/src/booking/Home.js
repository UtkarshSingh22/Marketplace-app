import { useEffect, useState } from "react";
import { allHotels } from "../actions/hotel";
import { Link } from "react-router-dom";
import Search from "../components/forms/Search";
import Hotel from "../components/Hotel";
import styles from "./Home.module.css";
import mainImage from "../images/hotel-blue.jpg";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/modals/LoadingSpinner";

const Home = () => {
    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        loadAllHotels();
    }, []);

    const loggedInUser = useSelector((state) => state.auth);

    const loadAllHotels = async () => {
        setIsLoading(true);
        let result = await allHotels();
        setHotels(result.data);
        setIsLoading(false);
    };

    const smoothScroll = (event) => {
        event.preventDefault();

        const element = document.querySelector("#hotels");
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main>
            {isLoading && <LoadingSpinner />}
            <div className={styles.mainContent}>
                <article className={styles.intro}>
                    <div className={styles.introText}>
                        <h1>Experience luxury in the lap of nature.</h1>
                        <p>
                            Hotelswind brings you the top rated hotels to choose
                            from and gets you an experience which can be
                            savoured for your entire life.
                        </p>
                        {!loggedInUser && (
                            <h2>What are you waiting for? Register now.</h2>
                        )}
                        <div className={styles.buttons}>
                            {!loggedInUser && (
                                <Link
                                    to="/register"
                                    className={styles.register}
                                >
                                    Register
                                </Link>
                            )}
                            <a
                                href="#hotels"
                                className={styles.browse}
                                onClick={smoothScroll}
                            >
                                Browse hotels &darr;
                            </a>
                        </div>
                        {!loggedInUser && (
                            <div className={styles.login}>
                                Already registered? Please{" "}
                                <Link to="/login" className={styles.loginBtn}>
                                    Login
                                </Link>
                                .
                            </div>
                        )}
                    </div>
                    <div className={styles.introImage}>
                        <img src={mainImage} className={styles.mainImg} />
                    </div>
                </article>
            </div>
            <article className={styles.hotelsParent} id="hotels">
                <div className={styles.hotels}>
                    <h1>All Hotels</h1>
                    <Search />
                    <div className={styles.hotelsList}>
                        {hotels.map((hotel) => {
                            return <Hotel key={hotel._id} hotel={hotel} />;
                        })}
                    </div>
                </div>
            </article>
            <Footer />
        </main>
    );
};

export default Home;
