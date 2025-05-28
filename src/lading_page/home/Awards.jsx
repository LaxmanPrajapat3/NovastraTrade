export default function Awards(){
    return(
        <div className="grid grid-cols-3 grid-rows-1  text-center p-7 max-sm:grid-cols-1 max-sm:grid-rows-2 max-sm:justify-items-center">
            <div className=" p-2 mb-2" >

<img src="../../src/assets/Award_img_1.png" alt="" className="h-80 justify-self-center" />
            </div>

            <div className=" p-2 col-span-2 mt-4" >
              <b>
                
                <h1 className=" text-2xl pt-1 pb-1">Largest Stock broker in india</h1>
                </b>  
<p className="text-base pb-1">2+ millon NovastraTrade clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>

<div className=" grid grid-cols-2 grid-rows-1 text-center max-sm:grid-cols-1 max-sm:grid-rows-2">
<ul className="list-disc ">
    <li >Futures and Options</li>
    <li>Commodity derivatives</li>
    <li>Currency derivatives</li>
    
    </ul> 
    <ul className="list-disc">
        
    <li>Stocks & IPOs</li>
    <li>Direct mutualfunds </li>
    <li>Bonds</li>
    
     </ul>               </div>
                </div>
           


        </div>
    )
}