import mainmobile_img from '../assets/mobile_main.png'

export default function MainArticle(){
    return (<article className='w-full relative mb-[120px]'>

      {/* mobile */}
      <div className='xl:hidden'>
        <img src={mainmobile_img} alt="메인 이미지" />
      <div className='w-3 h-3 rounded-md bg-black absolute bottom-1 left-1/2'></div>
      <div className='w-3 h-3 rounded-md bg-[rgba(0,0,0,0.4)] absolute bottom-1  left-1/2 mx-5'></div>
      </div>

      {/* pc 1280px */}
      <div className='hidden xl:block mt-5'>
      <img src={"https://file.cafe24cos.com/banner-admin-live/upload/ecudemo276582/695a2861-60e6-4532-b6fa-fbb93ec15fb1.png"} alt="메인 이미지" />
      </div>
    </article>)
    
}