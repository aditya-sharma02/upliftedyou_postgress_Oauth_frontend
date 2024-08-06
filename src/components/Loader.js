import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loader = () => {
    return (
        <>
            {/* <div className="w-screen h-screen flex justify-center items-center"> */}
                <div>
                    <BallTriangle
                        height={100}
                        width={100}
                        radius={5}
                        color="black"
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        visible={true}
                    />
                </div>
            {/* </div> */}
        </>
    )
}

export default Loader;