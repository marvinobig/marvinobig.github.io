const FormInput = ({ labelText, inputType, inputValue, setValue, placeHolder, error }) => {
    return (
        <div>
            <label>
                {labelText}
                <input
                    type={inputType}
                    value={inputValue}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeHolder}
                />
            </label>
            {error && <p>{error}</p>}
        </div>
    );
};

export default FormInput;