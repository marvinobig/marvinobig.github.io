const FormInput = ({ labelText, inputType, inputValue, setValue, placeHolder, error }) => {
    const labelStyle = {

    }

    const inputStyle = {

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
            {error && <p>{error}</p>}
        </>
    );
};

export default FormInput;