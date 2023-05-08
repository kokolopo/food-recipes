const PrimaryButton = ({ children, classname }) => {
    return (
        <>
            <button
                className={`${classname} group relative flex justify-center rounded-[10px] bg-primary py-[10px] text-white text-[12px] font-custom`}
                type="submit"
            >
                {children}
            </button>
        </>
    )
}

export default PrimaryButton