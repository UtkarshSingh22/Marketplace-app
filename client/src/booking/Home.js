import { useSelector } from "react-redux";

const Home = () => {
    const { auth } = useSelector((state) => state);
    return (
        <div>
            <div className="homepage">Home Page</div>
            <p>{JSON.stringify(auth)}</p>
        </div>
    );
};

export default Home;
