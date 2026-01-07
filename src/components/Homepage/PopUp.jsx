function PopUp({isOpen, onClose, src, caption}) {

    if (!isOpen) return null;
    return (
        <>
            <div className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-[#3B2F2F]/80 " onClick={onClose}>
                <figure className="max-w-[90vw] max-h-[80vh] object-contain block my-0 mx-auto" onClick={e => e.stopPropagation()}>
                    <img src={src} alt={caption} className="max-w-[90vw] max-h-[80vh] object-contain block my-0 mx-auto" />
                </figure>
                <div className="block w-[80%] max-w-[700px] text-center text-[#ccc] py-[10px] size-[20px]">{caption}</div>
            </div>
        </>
    )
}
export default PopUp;