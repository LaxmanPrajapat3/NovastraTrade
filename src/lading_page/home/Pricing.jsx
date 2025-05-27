export default function Pricing(){
    return(
        <div className="grid grid-cols-2  text-center pl-5 pr-5 pb-30 h-60  items-center mt-2  max-sm:grid-rows-2 max-sm:grid-cols-1 max-sm:h-100" >
            <div className="">
                
                <h1 className="text-2xl bold max-sm:text-lg">Unbeatable pricing</h1>
                <p className="text-xs mt-4 mb-4  max-sm:mb-0 max-sm:mt-0 ">
                   We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges. 
                </p>
                <a href="See pricing text-xs">See pricing &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="max-sm:mt-29">
                    <img src="../../src/assets/price_img_1.png" alt="" className="h-60 w-full object-contain"/>
                </div>
        </div>
    )
}