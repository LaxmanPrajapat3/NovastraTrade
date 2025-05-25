import stock1 from '../../assets/stock_img_1.png'
import './Hero.css'
export default function Hero(){
    return(
      <>   
        <div className="grid grid-cols-1 grid-rows-4 justify-items-center align-items-center  gap-x-4 gap-y-4 grid-rows-[1fr] ">
<img src={stock1} alt="Hero Image" className='bg-blue-900 mt-15' style={{width:'50vw'}} />
    <h1 className='investheading' >Invest in Everything</h1>
    <p className=''>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
    <button className=''>Signup For Free</button>
      </div>
      </>
    )
}