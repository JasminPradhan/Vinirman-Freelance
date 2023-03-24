const FormInput = ({ label, inputType,error,hidenseek,...otherProps }) => {

    return (

        <div className="form-input pt-4">
                <label className={`form-label font-semibold text-lg`}>{label}</label>
                <div className="input">
                    <input
                    className={`input-field ${inputType} text-center border-b h-12 md:w-[18rem] xl:w-[26.5rem] lg:w-[20rem]`}
                    {...otherProps}
                    />
                    {hidenseek}
                </div>
                <p>{error}</p>
        </div>
    )
};

export default FormInput;