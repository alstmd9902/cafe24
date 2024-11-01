import search from '../assets/search_img.png'
import menu_bar from '../assets/menu_img.png'
import logo from '../assets/organic_logo.jpg'
import person from '../assets/person_img.png'
import cart from '../assets/cart_img.png'
import under_arrow from '../assets/under_arrow.png'

export default function Header(){
    return (
  <header className='w-full'>
      { /* 모바일 영역 */ }
        <div className='xl:hidden'>
          <div className='w-full flex justify-around items-center fixed z-[1] bg-white p-5'>
            <a href="">
              <img className='w-[35px]' src={menu_bar} alt="메뉴바"/>
            </a>
            <a href="">
              <img className='w-[100px]' src={logo} alt="로고" />
            </a>
            <a href=''>
              <img className='w-9' src={search} alt="검색" />
            </a> 
          </div>   
        </div>

        {/* pc 1280px 영역 */}
      <div className='hidden xl:block'>
          <ul className='flex justify-end p-5 gap-4 text-xs'>
            <li className='relative before:contents-[] before:absolute before:w-[2px] before:h-full before:bg-gray-300 before:-right-2'><a href=''>회원가입</a></li>
            <li className='relative before:contents-[] before:absolute before:w-[2px] before:h-full before:bg-gray-300 before:-right-2'><a href=''>로그인</a></li>
            <li className='relative before:contents-[] before:absolute before:w-[2px] before:h-full before:bg-gray-300 before:-right-2'><a href=''>주문조회</a></li>
            <li className='relative before:contents-[] before:absolute before:w-[2px] before:h-full before:bg-gray-300 before:-right-2'><a href=''>최근본상품</a></li>
            <li><a href=''>고객센터</a></li>
            <li><a href=''><img className='w-5 absolute right-4 top-[18px]' src={under_arrow} alt="" /></a></li>
          </ul>
        <div className='flex justify-center p-5'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='flex justify-center items-center relative text-sm'>
          <ul className='flex'>
            <li className='px-6'><a href=''>NEW</a></li>
            <li className='px-6'><a href=''>BEST</a></li>
            <li className='px-6'><a href=''>SALE</a></li>
            <li className='px-6'><a href=''>EVENT</a></li>
          </ul>
          <div className='flex absolute right-0 gap-3 mr-9'>
            <a href="">
              <img className='w-[30px] h-[30px]' src={search} alt=""></img>
              </a>
            <a href="">
              <img className='w-[30px] h-[30px]' src={person} alt=""></img>
              </a>
            <a href="">
              <img className='w-[30px] h-[30px]' src={cart} alt=""></img>
              </a>
          </div>
        </div>
      </div>










  </header>)
}