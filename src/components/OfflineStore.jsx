export default function OfflineStore(){
    return( <article className='w-[92%] m-auto text-center overflow-hidden mb-[50px]'>
        <div className='mb-5 text-left py-[30px] px-4'>
          <h2 className='font-bold text-lg uppercase font-[Montserrat,"Noto Sans Kr"] leading-2'>
            offline store
            </h2>
          <p className='text-[#9a9a9a] mt-[8px] text-xs'>
          매장에서는 고객 여러분을 따뜻하게 맞이하고<br></br>
          기프트 구매를 위한 맞춤형 컨설팅을 제공해드립니다.<br></br><br></br>
          </p>
          <span className='block text-xs'>
          운영시간 : 평일 09:00-18:00<br></br>
          서울특별시 동작구 보라매로0길 00<br></br><br></br>
          </span>
          <a className='text-[10px] pt-[10px] pb-[13px] px-[15px] border border-gray-800 text-center
          hover:text-white hover:bg-black' href=''><button>VIEW MORE  +</button></a>
        </div>
    </article>)
}