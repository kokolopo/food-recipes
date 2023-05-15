// import { useState } from "react"

const InputField = ({ title, type, placeholder, name, value, setter }) => {
    return (
        <>
            <div className="relative w-auto text-secondaryText focus-within:text-primary">
                <label className="text-xs text-[#696F79] font-medium">{title}
                    <input type={type} name={name} value={value} onChange={(e) => setter(e.target.value)}
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

export default InputField