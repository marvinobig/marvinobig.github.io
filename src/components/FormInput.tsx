const FormInput = ({ labelText, inputType, inputValue, setValue, placeHolder, error }) => {
    const labelStyle = {

    }

    const inputStyle = {

    }

    const errorStyle = {

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
            {error && <p style={errorStyle}>{error}</p>}
        </>
    );
};

export default FormInput;