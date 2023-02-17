import React from 'react'

const Input = ({
    type = 'text',
    id = '',
    value = '',
    placeholder,
    onChange = () => { return },
}) => {
    return (
        <input
            type={type}
            id={id}
            value={value}
            placeholder={placeholder} />
    )
}

export default Input
