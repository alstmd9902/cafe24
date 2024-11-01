import secton1_img from '../assets/section1_img.png'
import new_img from '../assets/new_img.png'
import best_img from '../assets/best_img.png'

export default function NewArrivals(){
    return (<article className='w-[92%] m-auto text-center mb-[50px]'>
        <div className='mb-[30px]'>
          <h2 className='font-bold text-lg uppercase  font-[Montserrat] leading-3'>new! arrivals</h2>
          <p className='text-[#9a9a9a] mt-[8px] font-[700] font-[Montserrat,"Noto Sans Kr"]'>
            언제나 새로운 신상품
          </p>
        </div>
        <section className=''>
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
      </article>)
}