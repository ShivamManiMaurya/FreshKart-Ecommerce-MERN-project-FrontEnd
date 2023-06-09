import React from "react";
import { useSelector } from "react-redux";

function Home() {
    const user = useSelector((state) => state.user);
    console.log("home = ", user);

    return (
        <div>
            <h1>
                {user.firstName} {user.lastName}
            </h1>
            Home
        </div>
    );
}

export default Home;
