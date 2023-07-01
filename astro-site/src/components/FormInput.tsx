const FormInput = ({ labelText, inputType, inputValue, setValue, placeHolder, error }) => {
    const styleObj = {

    }
    
    return (
        <>
            <label style={styleObj}>
                {labelText}
                <input
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