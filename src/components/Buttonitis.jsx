import React from "react";

function Button(props) {
        return (
                <button
                        style={{
                                width: 90,
                                height: 28,
                                borderRadius: 20,
                                backgroundColor: "#4285f4",

                                marginLeft: 20,
                                borderWidth: props.bwwidth || 0,
                                fontWeight: "500",
                                
                                color: props.textColor || "white",
                                cursor: "pointer",
                        }}
                >
                        {props.label}
                </button>
        );
}

export default Button;
