const FormTextareaInput = ({ inputValue, setValue, placeHolder, error }) => {
    return (
        <>
            <textarea
                value={inputValue}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeHolder}
            />
            {error && <p>{error}</p>}
        </>
    );
}

export default FormTextareaInput;