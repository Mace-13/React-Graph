import React from 'react';

const InputField = props => {

    // function to check empty value, if true the button will be disabled, also check the email value is right with the @
    const validateInput = values => {
        if(values.some(f => f === "") || values[0].indexOf("@") === -1){
            return true
        } else {
            return false
        }
    }
    
    if (props.type === "submit") {
        return (
            <input
                className="ease myGray inline-block cursor-pointer rounded-full px-6 py-1 text-base text-white transition duration-500 hover:bg-red-300"
                type='submit'
                value={props.label}
                disabled={validateInput(props.formValues)}
            />
        )
    } else if (props.type === "textarea") {
        return (
            <label className="">
                {props.label}
                <textarea
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    className=""
                    name={props.name}
                />
            </label>

        );
    } else {
        return (
            <label className="">
                {props.label}
                <input 
                onChange={(e) => props.onChangeHandler(e.target.value)}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                required={props.isRequired}
                className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 mb-5'
                name={props.name}
                />
            </label>
        );
    }

}

export default InputField;