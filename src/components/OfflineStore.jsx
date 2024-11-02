export default function OfflineStore(){
    return( <article className='w-[92%] m-auto text-center mb-[50px] xl:mb-[120px]'>

      {/* mobile */}
      <div className="xl:hidden">

        <section className='mb-5  flex flex-wrap-reverse justify-between items-center bg-gray-100'>
          
          <div className="flex justify-center  text-left p-[5%]">
            <ul className="flex flex-col gap-2">
              <li>
                <h2 className='font-bold text-lg uppercase leading-2'>
                  offline store
                </h2>
              </li>
              <li>
                <p className='text-[#9a9a9a] mt-[8px] text-sm'>
                매장에서는 고객 여러분을 따뜻하게 맞이하고<br></br>
                기프트 구매를 위한 맞춤형 컨설팅을 제공해드립니다.<br></br><br></br>
                </p>
              </li>
              <li>
                <span className='block text-xs'>
                운영시간 : 평일 09:00-18:00<br></br>
                서울특별시 동작구 보라매로0길 00<br></br><br></br>
                </span>
              </li>
              <a href=''><button className='text-xs p-3 border border-gray-800 
            hover:text-white hover:bg-black'>VIEW MORE  +</button>
              </a>
            </ul>
          </div>

          {/* 오프라인 이미지 */}
          <div>
            <img src={"https://ecudemo276582.cafe24.com/SkinImg/img/main_map_pc.png"} alt="" />
          </div>
        </section>
      </div>

      {/* PC 1280PX */}
      <div className="xl:block hidden">

        <section className='mb-5  flex justify-between items-center bg-gray-100'>
          
          <div className="flex justify-center  text-left p-[5%]">
            <ul className="flex flex-col gap-2">
              <li>
                <h2 className='font-bold text-2xl uppercase leading-2'>
                  offline store
                  </h2>
              </li>
              <li>
                <p className='text-[#9a9a9a] mt-[8px] text-base'>
                매장에서는 고객 여러분을 따뜻하게 맞이하고<br></br>
                기프트 구매를 위한 맞춤형 컨설팅을 제공해드립니다.<br></br><br></br>
                </p>
              </li>
              <li>
                <span className='block text-sm'>
                운영시간 : 평일 09:00-18:00<br></br>
                서울특별시 동작구 보라매로0길 00<br></br><br></br>
                </span>
              </li>
              <a href=''><button className='text-base p-6 border border-gray-800 
            hover:text-white hover:bg-black'>VIEW MORE  +</button>
              </a>
            </ul>
          </div>

          {/* 오프라인 이미지 */}
          <div>
            <img src={"https://ecudemo276582.cafe24.com/SkinImg/img/main_map_pc.png"} alt="" />
          </div>
        </section>
      </div>
    </article>)
}