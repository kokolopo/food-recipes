const Checkbox = ({ children }) => {
    return (
        <>
            <div className="flex text-[#696F79] font-custom text-[10px]">
                <input type="checkbox" className="mr-1 accent-primary" />
                <label className='font-medium'>{children}</label>
            </div>
        </>
    )
}

export default Checkbox