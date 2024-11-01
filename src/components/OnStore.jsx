import section2_1img from '../assets/section2-1_img.png'
import banner_arrow from '../assets/banner_arrow.svg'

export default function OnStore(){
    return(<article className='w-[92%] m-auto text-center overflow-hidden mb-[120px]'>
    <div className='xl:hidden'> 
      <div className='mb-5'>
        <h2 className='font-bold text-lg uppercase font-[Montserrat,"Noto Sans Kr"] leading-2'>
          on store!
          </h2>
        <p className='text-[#9a9a9a] mt-[8px] font-[700] font-[Montserrat,"Noto Sans Kr"]'>
          요즘 가장 핫한 상품 온스토어
        </p>
      </div>

      <section className='mb-12 flex justify-start items-start w-[calc(250px*2)] gap-2'>
      <div className='px-[10px] group'>
            <a href="">
              <img  src={section2_1img} alt="" />
            <ul className='w-full mt-[10px] text-left flex flex-col relative gap-3'>
              <li className='text-sm text-[#3a3a3a]'>달콤상큼한 디저트를 만나보세요</li>
              <li className='flex justify-end absolute right-0 top-4 m-[20xp]'>
                <img className='w-[28px] h-[28px] ' src={banner_arrow} alt="" />
              </li>
              <li><span className='text-[rgba(154,154,154)]  relative group-hover:border-b group-hover:border-gray-500 '>
              자세히 살펴보기</span></li>
            </ul>
            </a>
          </div>

          <div className='px-[10px] group'>
            <a href="">
              <img  src={section2_1img} alt="" />
            <ul className='w-full mt-[10px] text-left flex flex-col relative gap-3'>
              <li className='text-sm text-[#3a3a3a]'>달콤상큼한 디저트를 만나보세요</li>
              <li className='flex justify-end absolute right-0 top-4 m-[20xp]'>
                <img className='w-[28px] h-[28px] ' src={banner_arrow} alt="" />
              </li>
              <li><span className='text-[rgba(154,154,154)]  relative group-hover:border-b group-hover:border-gray-500 '>
              자세히 살펴보기</span></li>
            </ul>
            </a>
          </div>
      </section>
    </div>

      {/* pc 1280px */}
      <div className='hidden xl:block'>
        <div className='mb-5'>
          <h2 className='font-bold uppercase leading-2 text-2xl'>
            on store!
          </h2>
          <p className='text-[#9a9a9a] mt-[8px] text-sm'>
            요즘 가장 핫한 상품 온스토어
          </p>
      </div>

      <section className='mb-12 flex  gap-2'>
          <div className='px-[10px] group'>
            <a href="">
              <img  src={section2_1img} alt="" />
            <ul className='w-full mt-[10px] text-left flex flex-col relative gap-3'>
              <li className='text-base text-[#3a3a3a]'>달콤상큼한 디저트를 만나보세요</li>
              <li className='flex justify-end absolute right-0 top-4 m-[20xp]'>
                <img className='w-[28px] h-[28px] ' src={banner_arrow} alt="" />
              </li>
              <li><span className='text-[rgba(154,154,154)]  relative group-hover:border-b group-hover:border-gray-500 '>
              자세히 살펴보기</span></li>
            </ul>
            </a>
          </div>

          <div className='px-[10px] group'>
            <a href="">
              <img  src={"https://ecudemo276582.cafe24.com/SkinImg/img/main_banner02_pc.png"} alt="" />
            <ul className='w-full mt-[10px] text-left flex flex-col relative gap-3'>
              <li className='text-base text-[#3a3a3a]'>AA+한우를 집에서 즐기세요</li>
              <li className='flex justify-end absolute right-0 top-4 m-[20xp]'>
                <img className='w-[28px] h-[28px] ' src={banner_arrow} alt="" />
              </li>
              <li><span className='text-[rgba(154,154,154)]  relative group-hover:border-b group-hover:border-gray-500 '>
              자세히 살펴보기</span></li>
            </ul>
            </a>
          </div>

          <div className='px-[10px] group'>
            <a href="">
              <img  src={"https://ecudemo276582.cafe24.com/SkinImg/img/main_banner03_pc.png"} alt="" />
            <ul className='w-full mt-[10px] text-left flex flex-col relative gap-3'>
              <li className='text-base text-[#3a3a3a]'>핫플 카페 빵 지금 주문하면 무료배송</li>
              <li className='flex justify-end absolute right-0 top-4 m-[20xp]'>
                <img className='w-[28px] h-[28px] ' src={banner_arrow} alt="" />
              </li>
              <li><span className='text-[rgba(154,154,154)]  relative group-hover:border-b group-hover:border-gray-500 '>
              자세히 살펴보기</span></li>
            </ul>
            </a>
          </div>
        </section>
      </div>
      </article>)
}