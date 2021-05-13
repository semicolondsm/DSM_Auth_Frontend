import { useState } from "react";
import arrow from "../../assets/arrow.svg";

const List = ({ data }) => {
    const [isSpread, setIsSpread] = useState(true);
    return (
        <>
            {!data.length ? (
                <>{data[0]}</>
            ) : (
                <>
                    {data.map((url) => {
                        return url;
                    })}
                    <img
                        onClick={() => setIsSpread(!isSpread)}
                        style={
                            isSpread
                                ? {
                                      marginLeft: "4px",
                                      width: "15px",
                                      transform:
                                          "translateY(1.5px) rotate(90deg)",
                                      transition: "0.3s transform ease-out",
                                  }
                                : {
                                      marginLeft: "4px",
                                      width: "15px",
                                      transform:
                                          "translateY(1.5px) rotate(-90deg)",
                                      transition: "0.3s transform ease-out",
                                  }
                        }
                        src={arrow}
                    />
                </>
            )}
        </>
    );
};

export default List;
