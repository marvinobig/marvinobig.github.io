const Button = ({ btnType, eventFunction, btnText }) => {
    return (
        <button
            type={btnType}
            onClick={eventFunction}
        >
            {btnText}
        </button>
    );
};

export default Button;