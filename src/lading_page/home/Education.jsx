export default function Education(){
    return(
        <div className="grid grid-cols-2 grid-rows-1  gap-20 p-10 max-sm:grid-rows-2 max-sm:grid-cols-1">
            <div className=""><img src="../../src/assets/education.svg" alt="" /></div>
            <div className="  items-center grid items-center">
                <h2 className="pb-2 text-3xl">Free and open market education</h2>
            <p className="pb-2">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href="" className="text-blue-800">Varsity <i class="fa-solid fa-arrow-right"></i></a>
            <p className="pb-2">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>

            <a href="" className="text-blue-800">TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    )
}