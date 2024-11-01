import secton1_img from '../assets/section1_img.png'
import new_img from '../assets/new_img.png'
import best_img from '../assets/best_img.png'

export default function NewArrivals(){
    return (<article className='w-[92%] m-auto text-center mb-[120px]'>

      {/* mobile */}
      <div className='xl:hidden'>
        <div className='mb-[30px]'>
          <h2 className='font-bold text-lg uppercase  leading-2'>new! arrivals</h2>
          <p className='text-[#9a9a9a] mt-[8px] font-[700] font-[Montserrat,"Noto Sans Kr"]'>
            언제나 새로운 신상품
          </p>
        </div>
        <section>
          <div className='mx-[10px] relative mb-[35px]'>
            <a href="">
              <img src={secton1_img} alt="" />
              <img className='absolute top-0' src={new_img} alt="" />
            </a>
            <ul className='absolute bg-white w-full bottom-0 text-left leading-6 -mb-5 py-[3%]'>
              <li className='text-[#555555] mb-[]'>유기농 달걀</li>
              <li><strong className='mb[5px] text-sm inline-block'>6,000원</strong></li>
            </ul>
          </div>
  
          <div className='mx-[10px] mb-[35px] relative'>
            <a href="">
              <img src={secton1_img} alt="" />
              <img className='absolute top-0' src={best_img} alt="" />
            </a>
            <ul className='absolute bg-white w-full bottom-0 text-left leading-6 -mb-5 py-[3%]'>
              <li className='text-[#555555]'>유기농 달걀</li>
              <strong className='pt-1 text-sm'>6,000원</strong>
            </ul>
          </div>
  
          <div className='mx-[10px] mb-[35px] relative'>
            <a href="">
              <img src={secton1_img} alt="" />
              {/* <img className='absolute top-0' src={best_img} alt="" /> */}
            </a>
            <ul className='absolute bg-white w-full bottom-0 text-left leading-6 -mb-5 py-[3%]'>
              <li className='text-[#555555]'>유기농 달걀</li>
              <strong className='pt-1 text-sm'>6,000원</strong>
            </ul>
          </div>
        </section>
      </div>

      
      {/* pc 1280px */}
      <div className='xl:block hidden'>
        <div className='mb-[30px]'>
          <h2 className='font-bold uppercase leading-2 text-2xl'>new! arrivals</h2>
            <p className='text-[#9a9a9a] mt-[8px] text-sm'>
              언제나 새로운 신상품
            </p>
          </div>
          <section className='xl:flex'>
            <div className='mx-[10px] relative group'>
              <a href="">
                <img src={"https://ecudemo276582.cafe24.com/web/product/medium/202304/429f508a8cca930c14c9fd94c819fc53.png"} alt="" />
                <img className='absolute top-0' src={new_img} alt="" />
              </a>
              
              <ul className='absolute bottom-0 bg-white w-full text-left leading-6  p-4 transform translate-y-[30px] transition-transform duration-[0.8s] ease-in-out group-hover:opacity-100 group-hover:translate-y-0 opacity-0'>
                <li className='text-[#555555] '>유기농 달걀</li>
                <li><strong className='mb[5px] text-sm inline-block'>6,000원</strong></li>
              </ul>
            </div>
    
            <div className='mx-[10px] relative group'>
              <a href="">
                <img src={"https://ecudemo276582.cafe24.com/web/product/medium/202304/a7287e96dab8d49ddd877b5a25886a75.png"} alt="" />
                <img className='absolute top-0' src={new_img} alt="" />
              </a>
              
              <ul className='absolute bottom-0 bg-white w-full text-left leading-6  p-4 transform translate-y-[30px] transition-transform duration-[0.8s] ease-in-out group-hover:opacity-100 group-hover:translate-y-0 opacity-0'>
                <li className='text-[#555555] '>유기농 아침 식빵</li>
                <li><strong className='mb[5px] text-sm inline-block'>12,000원</strong></li>
              </ul>
            </div>
    
            <div className='mx-[10px] relative group'>
              <a href="">
                <img src={"https://ecudemo276582.cafe24.com/web/product/medium/202304/03ea4dfe46527c2b2b04c21c7cfd442c.png"} alt="" />
                <img className='absolute top-0' src={best_img} alt="" />
              </a>
              
              <ul className='absolute bottom-0 bg-white w-full text-left leading-6  p-4 transform translate-y-[30px] transition-transform duration-[0.8s] ease-in-out group-hover:opacity-100 group-hover:translate-y-0 opacity-0'>
                <li className='text-[#555555] '>딸기 무스 케이크</li>
                <li><strong className='mb[5px] text-sm inline-block'>30,000원</strong></li>
              </ul>
            </div>
            
          </section>
        </div>
      </article>)
}