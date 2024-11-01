import section2_1img from '../assets/section2-1_img.png'
import banner_arrow from '../assets/banner_arrow.svg'

export default function OnStore(){
    return(<article className='w-[92%] m-auto text-center overflow-hidden mb-[50px]'>
      <div className='mb-5'>
        <h2 className='font-bold text-lg uppercase font-[Montserrat,"Noto Sans Kr"] leading-3'>
          on store!
          </h2>
        <p className='text-[#9a9a9a] mt-[8px] font-[700] font-[Montserrat,"Noto Sans Kr"]'>
          요즘 가장 핫한 상품 온스토어
        </p>
      </div>

      <section className='mb-12 flex justify-start items-start w-[calc(250px*2)]'>
        <div className='px-[10px]'>
            <a href="">
              <img  src={section2_1img} alt="" />
            <ul className='w-full mt-[10px] text-left flex flex-col relative'>
              <li className='text-sm text-[#3a3a3a]'>달콤상큼한 디저트를 만나보세요</li>
              <li className='flex justify-end absolute right-0 top-2'>
                <img className='w-[28px] h-[28px] ' src={banner_arrow} alt="" />
              </li>
              <li className='text-[rgba(154,154,154)] mt-[10px]'>자세히 살펴보기</li>
            </ul>
            </a>
          </div>

          <div className='px-[10px]'>
            <a href="">
              <img  src={section2_1img} alt="" />
            <ul className='w-full mt-[10px] text-left flex flex-col relative'>
              <li className='text-sm text-[#3a3a3a]'>달콤상큼한 디저트를 만나보세요</li>
              <li className='flex justify-end absolute right-0 top-2'>
                <img className='w-[28px] h-[28px] ' src={banner_arrow} alt="" />
              </li>
              <li className='text-[rgba(154,154,154)] mt-[10px]'>자세히 살펴보기</li>
            </ul>
            </a>
          </div>
      </section>
      </article>)
}