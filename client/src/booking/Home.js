import { useSelector } from "react-redux";

const Home = () => {
    const state = useSelector((state) => state.auth);
    return <div className="homepage">Home Page {JSON.stringify(state)}</div>;
};

export default Home;
