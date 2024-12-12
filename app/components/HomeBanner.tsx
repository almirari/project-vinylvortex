const HomeBanner = () => {
    return ( 
        <div 
        className="relative mb-8" 
        style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1603373362725-47eb708d7b78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="relative z-20 mx-auto px-8 py-1 flex flex-col gap-2 md:flex-row items-center justify-evenly">
            <div className="m-8 text-white md:mb-0 text-center">
                <p className="text-xl md:text-6xl text-white mb-0">Online Exclusive</p>
                <h1 className="text-4xl md:text-8xl font-bold text-white mb-2">Weekly Deals</h1>
                <p className="text-lg md:text-xl mb-8 opacity-50">Enjoy discounts on selected items.</p>
            </div>
        </div>
    </div>


    );
}
 
export default HomeBanner;