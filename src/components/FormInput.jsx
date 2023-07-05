const FormInput = ({ labelText, inputType, inputValue, setValue, placeHolder, error }) => {
    const labelStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: "10px",
        height: "80px",
        padding: "4px 16px",
        border: "2px solid #272727"
    }

    const inputStyle = {
        height: "100%",
        width: "100%",
        padding: "0 0 0 16px",
        border: "0",
    }

    return (
        <>
            <label style={labelStyle}>
                {labelText}
                <input
                    style={inputStyle}
                    type={inputType}
                    value={inputValue}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeHolder}
                />
            </label>
            {error && <p className="error">{error}</p>}
        </>
    );
};

export default FormInput;