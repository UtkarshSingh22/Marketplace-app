import { useEffect, useState } from "react";
import { allHotels } from "../actions/hotel";
import { Link } from "react-router-dom";
import Search from "../components/forms/Search";
import Hotel from "../components/Hotel";
import styles from "./Home.module.css";
import mainImage from "../images/hotel-blue.jpg";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import Footer from "../components/Footer";

const Home = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        loadAllHotels();
    }, []);

    const loggedInUser = useSelector((state) => state.auth);

    const loadAllHotels = async () => {
        let result = await allHotels();
        setHotels(result.data);
    };

    return (
        <main>
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
                            <Button>Browse hotels &darr;</Button>
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
            <article className={styles.hotelsParent}>
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
