import search from '../assets/search_img.png'
import menu_bar from '../assets/menu_img.png'
import logo from '../assets/organic_logo.jpg'
export default function Header(){
    return (<header className='w-full h-16'>
    <nav className='w-full flex justify-around items-center fixed z-[1] bg-white h-16'>
      <a href="">
        <img className='w-[35px]' src={menu_bar} alt="" />
      </a>
    <a href="">
    <img className='w-[100px]' src={logo} alt="" />
    </a>
    <a>
      <img className='w-9' src={search} alt="" />
    </a> 
    </nav>   
  </header>)
}