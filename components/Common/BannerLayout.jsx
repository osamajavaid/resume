const BannerLayout = ({ children }) => {
    return (
        <div
            className="relative w-full h-80 bg-fixed z-10"
            style={{
                background: 'url(images/background.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="bg-Black w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BannerLayout
