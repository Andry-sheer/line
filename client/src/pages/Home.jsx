import { NavLink } from "react-router-dom";
import IMAGES from "../assets/images";

const Home = () => {
  return (
    <div className="myBG px-7 py-10 md:px-12">
      <div className="container mx-auto gap-8 md:grid grid-cols-2">
        <div className="pb-5 col-span-1 row-span-1">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-7xl pb-3">Discover digital art & Collect NFTs</h1>
          <p className="xl:text-2xl">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
        </div>

          <div className="Contr col-start-2 col-end-3 row-start-1 row-end-3">
            <div className="imgCont">
              <img src={IMAGES.digital} alt="img" width={315} height={206}/>
            </div>
            
            <div className="p-5">
              <h2 className="pb-2 font-bold">Space Walking</h2>
              <div className="flex items-center gap-2">
                <img className="rounded-full w-6 h-6" src={IMAGES.Avatar10} alt="ava"/>
                <p className='text-xs'>Animakid</p>
              </div>
            </div>
          </div>

          <div className="pt-5 col-span-1 row-span-1">
          <NavLink to='/sing-in' className="myRadius bg-yellow-400 font-bold mx-auto md:mx-0 max-w-96 md:max-w-56 flex items-center justify-center gap-3 py-2 px-7 md:py-5">
            <img src={IMAGES.icon15} alt="img"/>
            Get started
          </NavLink>

          <div className="flex items-center mx-auto max-w-80 md:max-w-full md:mx-0 justify-between mt-8">
          <div className="">
            <p className="font-bold text-xl md:text-2xl xl:text-3xl">240k+</p>
            <p className="xl:text-2xl">Total Sale</p>
          </div>
          <div className="">
            <p className="font-bold text-xl md:text-2xl xl:text-3xl">100k+</p>
            <p className="xl:text-2xl">Auctions</p>
          </div>
          <div className="">
            <p className="font-bold text-xl md:text-2xl xl:text-3xl">240k+</p>
            <p className="xl:text-2xl">Artists</p>
          </div>
          </div>
          </div>

      </div>
    </div>
  )
}

export default Home;