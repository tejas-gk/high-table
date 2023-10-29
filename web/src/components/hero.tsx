import HeroSearch from './hero-search'

export default function Hero() {
  return (
    <div className='h-[10rem] w-full flex justify-center items-center rounded-md  mt-6
       bg-[url("https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg")] bg-cover 
      '>
        <HeroSearch />  
    </div>
  )
}
