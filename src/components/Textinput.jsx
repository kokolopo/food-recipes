import React from 'react'

const Textinput = ({ title, placeholder, name }) => {
    return (
        <>
            <div className="relative mt-3 w-auto px-[28px] text-secondaryText focus-within:text-primary">
                <label className="text-xs text-[#696F79] font-medium">{title}
                    <input type="text" name={name}
                        className="shadow-md py-[10px] min-w-full mt-1 text-[12px]
                                        bg-secondary placeholder:text-secondaryText rounded-[6px] 
                                        pl-5 focus:outline-primary focus:outline-none"
                        placeholder={placeholder}
                        autocomplete="off"
                    />
                </label>
            </div>
        </>
    )
}

export default Textinput