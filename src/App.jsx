import './App.css'
import cart from './icons/cart.svg'
import search from './icons/search.svg'
import line from './icons/long-arrow.svg'
import ace from './icons/ace.svg'
import bg1 from './assets/ace-bg2.jpg'
import bg2 from './assets/ace-bg.jpg'
import delivery from './icons/delivery.svg'
import pay from './icons/payment.svg'
import support from './icons/support.svg'
import diamond from './icons/diamond.svg'
import col1 from './assets/buy1.jpg'
import col2 from './assets/buy2.jpg'
import col3 from './assets/buy3.jpg'
import col4 from './assets/buy4.jpg'
import design from './assets/black-bottle.jpg'
import Card from './card.jsx'
import sell from './assets/new.jpg'
import sell1 from './assets/new1.jpg'
import sell2 from './assets/buy3.jpg'
import twitter from './assets/twitter.png'
import tiktok from './assets/tiktok.svg'
import insta from './assets/instagram.svg'
import what from './assets/whatsapp.svg'





function App() {
  let cream = "#f3dd60ff"

  return (
    
    <div className='overflow-x-hidden bg-black'>
      <div className="flex gap-48 px-15 bg-black">
        <div className="logo py-4 flex text-2xl  text-[#f3dd60ff]" style={{ fontFamily: '"Playfair Display", serif' }}>
          <img src={ace} alt="" className='w-9 h-9 mr-[3px]' />ACESCENTS
        </div>
        <div className="optio">
          <nav className=' '>
            <ul className='flex space-x-8 px-6 py-4 text-[#f3dd60ff] font-medium'>
              <li>Home</li>
              <li>Shop</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Collections</li>
            </ul>
          </nav>
        </div>
        <div className="cart flex py-4 space-x-5 font-medium">
          <div className="cart border border-[#f3dd60ff] w-8 h-8 flex items-center justify-center rounded ">
            <img src={cart} alt="" className='w-4 h-4 '/>
          </div>
          <div className=' border border-[#f3dd60ff] w-8 h-8 flex items-center justify-center rounded'>
            <img src={search} alt="" className='w-4 h-4' />
          </div>
          <button className='flex gap-2 rounded cursor-pointer items-center bg-[#f3dd60ff] text-black px-3  font-medium '>
            <img src={line} alt="" className='w-4 h-4' />
            Contact Us
          </button>
        </div>
      </div>

      <div className="landing-page flex w-screen  ">
          <div className=" relative pic1 w-1/2 h-[500px] bg-cover bg-center "  style={{ backgroundImage: `url(${bg1})` }}>

          <div className='absolute inset-0 flex bg-gradient-to-t from-black to-transparent'></div>
          <div className="absolute right-10 bottom-20 flex flex-col gap-6  text-white p-8">
            <h1 className="text-6xl font-md" style={{ fontFamily: '"Playfair Display", serif' }}>Where Every Scent Tells Your Story</h1>
            <h4>Discover fragnances that capture your essence and leaves behind a timeless expression</h4>
            <button className=' mt-2 px-6 w-40  py-3 bg-[#f3dd60ff] text-black font-medium rounded-lg shadow hover:bg-gray-200 transition'>
            Shop Now
          </button>
          </div>
          

          </div>
          <div className="pic2 w-1/2 h-[500px] bg-cover bg-center "  style={{ backgroundImage: `url(${bg2})` }}>

          </div>
      </div>

      <div className="services flex gap-22 py-5 bg-[#f3dd60ff] px-25">
        <div className='flex items-center gap-2'>
          <img src={delivery} alt="" className='w-7 h-7' />
          <div>
            <p className='font-medium'>Fast Delivery</p>
            <p className='text-sm'>No delay in shipping</p>
          </div>
        </div>
         <div className='flex items-center gap-2'>
          <img src={pay} alt="" className='w-7 h-7' />
          <div>
            <p className='font-medium'>Flexible payments</p>
            <p className='text-sm'>Secure and easy payment options</p>
          </div>
        </div>
         <div className='flex items-center gap-2'>
          <img src={support} alt="" className='w-7 h-7' />
          <div>
            <p className='font-medium'>24/7 Assistance</p>
            <p className='text-sm'>Always-on customer support</p>
          </div>
        </div>
         <div className='flex items-center gap-2'>
          <img src={diamond} alt="" className='w-7 h-7' />
          <div>
            <p className='font-medium'>Satisfaction Guaranteed</p>
            <p className='text-sm'>Guaranteed satisfaction fro prouducts</p>
          </div>
        </div>
      </div>

      <div className="collections flex flex-col   mt-12 items-center justify-center ">
        <h2 className="collections text-amber-300 text-5xl" style={{ fontFamily: '"Playfair Display", serif' }} >Curated Collections</h2>
        <div className="perfumes mt-9  gap-10 flex">
          <div className='flex justify-center flex-col items-center'>
            <img src={col1} alt="" className='w-60 h-80'/>
            <h4 className='text-sm mt-2 text-white'>Ana Abiyedh Leather</h4>
          </div>
          
          <div className='flex justify-center flex-col items-center'>
            <img src={col2} alt="" className='w-60 h-80'/>
            <h4 className='text-sm mt-2 text-white'>Ameerat Al Arab</h4>
          </div>
          
          <div className='flex justify-center flex-col items-center'>
            <img src={col3} alt="" className='w-60 h-80'/>
            <h4 className='text-sm mt-2 text-white'>Elegant perfume</h4>
          </div>
          
          <div className='flex justify-center flex-col items-center'>
            <img src={col4} alt="" className='w-60 h-80'/>
            <h4 className='text-sm mt-2 text-white'>Khamrah Lattafa</h4>
          </div>
        </div>
         <button className='mt-10 flex rounded cursor-pointer px-6 py-2 bg-[#f3dd60ff]'>
            <img src={line} alt="" className='w-15 h-6'/>
            View full collection
          </button>
      </div>

      <div className="info-sec px-10 flex mt-25 text-white">
        <div className="info-cont">
          <div className="info">
          <h1 className=' text-[45px]' style={{ fontFamily: '"Playfair Display", serif' }}>
            Journey of Elysian Elegance
          </h1>
          <h2 className='text-[40px] mt-4' style={{ fontFamily: '"Playfair Display", serif' }}>
            A Fragnance Timeline
          </h2>
        </div>
        <div className="details mt-10 px-5  border-l border-l-gray-800">
          <p className='w-100 text-sm text-gray-600'>
            Uncover the chapter of our olfactory legacy, each fragnance a milestone in the persuit of timeless elegance.
          </p>
          <button className='mt-10'>
            <div className="flex py-2 gap-3 px-3 items-center rounded-4xl bg-gray-900"> 
              <img src={line} alt="" className='w-10 h-10 px-2 rounded-4xl bg-[#f3dd60ff] '/>
              View full details
            </div>
          </button>
        </div>
        </div>
        <div className="">
          <img src={design} alt="" />
        </div>
      </div>

      <div className="for-sale text-[#f3dd60ff]" style={{ fontFamily: '"Playfair Display", serif' }}>
        <h1 className='text-6xl items-center flex justify-center mt-20'>
          Fragnace Favorites
        </h1>
        <div className="sales flex gap-3 justify-center mt-10">
          <Card img={sell} price={"$2000"} name={"Whispers of Ether"}/>
          <Card img={sell1} price={"$5000"} name={"Whispers of Ether"}/>
          <Card img={sell2} price={"$7000"} name={"Whispers of Ether"}/>
          <Card img={sell2} price={"$7300"} name={"Whispers of Ether"}/>
          
        </div>

      </div>

      <div className="for-sale text-[#f3dd60ff]" style={{ fontFamily: '"Playfair Display", serif' }}>
        <h1 className='text-6xl items-center flex justify-center mt-20'>
          Best Sellers
        </h1>
        <div className="sales flex gap-3 justify-center mt-10">
          <Card img={sell} price={"$2000"} name={"Whispers of Ether"}/>
          <Card img={sell1} price={"$5000"} name={"Whispers of Ether"}/>
          <Card img={sell2} price={"$7000"} name={"Whispers of Ether"}/>
          <Card img={sell2} price={"$7300"} name={"Whispers of Ether"}/>
          
        </div>
        <div className="sales flex gap-3 justify-center mt-10">
          <Card img={sell} price={"$2000"} name={"Whispers of Ether"}/>
          <Card img={sell1} price={"$5000"} name={"Whispers of Ether"}/>
          <Card img={sell2} price={"$7000"} name={"Whispers of Ether"}/>
          <Card img={sell2} price={"$7300"} name={"Whispers of Ether"}/>
          
        </div>
        <div className="sales flex gap-3 justify-center mt-10">
          <Card img={sell} price={"$2000"} name={"Whispers of Ether"}/>
          <Card img={sell1} price={"$5000"} name={"Whispers of Ether"}/>
          <Card img={sell2} price={"$7000"} name={"Whispers of Ether"}/>
          <Card img={sell2} price={"$7300"} name={"Whispers of Ether"}/>
          
        </div>

      </div>

      <footer className='mt-30 px-10  '>
       <div className="cont flex  justify-between">
         <div className="description">
          <div className="logo py-4 flex text-3xl  text-[#f3dd60ff]" style={{ fontFamily: '"Playfair Display", serif' }}>
          <img src={ace} alt="" className='w-9 h-9 mr-[3px]' />ACESCENTS
          </div>
          <p className='text-gray-500 text-[13px] w-79 mt-[-10px]'>
            Indulge in the essense of opulence with our exqusite fragnance, where luxury meets allure in every captivating note. 
          </p>

        </div>
        <div className="left-description">
          <p className='text-[#f3dd60ff] text-sm'>
            Get update
          </p>
          <p className='text-white text-2xl ' style={{ fontFamily: '"Playfair Display", serif' }}>
            Suscribe for latetest update
          </p>
          <div className="register flex mt-3  gap-0.5">
            <input type="text" placeholder='Enter email' name="" id="" className='text-white text-sm px-2 border-[0.2px] border-gray-500  rounded' />
            <button className='text-black rounded px-2 py-1 bg-[#f3dd60ff]'>
              Subscribe
            </button>
          </div>
        </div>
        
       </div>
       <div className="icons flex border border-b-gray-500 pb-7 mt-15 items-center justify-center gap-7">
        <img src={twitter} alt=""className='w-9 p-1.5 rounded rounded-full h-9 border border-white ' />
        <img src={tiktok} alt="" className='w-9 p-2 h-9 border rounded-full border-white' />
        <img src={insta} alt="" className='w-9 p-2 h-9 border rounded-full border-white' />
        <img src={what} alt="" className='w-9 p-2 h-9 border rounded-full border-white'/>
        
       </div>
       <div className='flex items-center justify-between text-[15px] font-bold mt-5 pb-30'>
        <p className='text-gray-500'>Privacy</p>
        <p className='text-gray-500'>About Us</p>
        <p className='text-gray-500'>Contact Us</p>
        <p className='text-gray-500'>Copyright @ 2023</p>
       </div>
      </footer>

    </div>
        
  
  )
}

export default App
