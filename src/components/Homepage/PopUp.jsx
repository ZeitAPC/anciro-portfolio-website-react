function PopUp({isOpen, onClose, src, caption}) {
    const overlay = "fixed inset-0 z-10 flex flex-col items-center justify-center bg-[#3B2F2F]/80 ";
    const popUpImageContainer = "max-w-[90vw] max-h-[80vh] object-contain block my-0 mx-auto";
    const popUpImage = "max-w-[90vw] max-h-[80vh] object-contain block my-0 mx-auto";
    const popUpCaption = "block w-[80%] max-w-[700px] text-center text-[#ccc] py-[10px] size-[20px]";

    if (!isOpen) return null;
    return (
        <>
            <div className={overlay} onClick={onClose}>
                <figure className={popUpImageContainer} onClick={e => e.stopPropagation()}>
                    <img src={src} alt={caption} className={popUpImage} />
                </figure>
                <div className={popUpCaption}>{caption}</div>
            </div>
        </>
    )
}
export default PopUp;