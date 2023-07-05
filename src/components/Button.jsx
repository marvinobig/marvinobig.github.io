const Button = ({ btnType, eventFunction, btnText }) => {
    const buttonStyle = {
        height: "100%",
        minHeight: "80px",
        maxHeight: "80px",
        backgroundColor: "#272727",
        color: "#fcfcfc",
        padding: "10px 20px",
        border: "2px solid #272727"
    }

    return (
        <button
            style={buttonStyle}
            type={btnType}
            onClick={eventFunction}
        >
            {btnText}
        </button>
    );
};

export default Button;