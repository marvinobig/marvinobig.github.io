const FormTextareaInput = ({ inputValue, setValue, placeHolder, error }) => {
    const textAreaStyle = {
        height: "100%",
        minHeight: "180px",
        padding: "20px",
        border: "2px solid #272727",
        resize: 'none',
    }

    return (
        <>
            <textarea
                style={textAreaStyle}
                value={inputValue}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeHolder}
            />
            {error && <p className="error">{error}</p>}
        </>
    );
}

export default FormTextareaInput;