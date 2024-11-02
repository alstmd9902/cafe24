import youtube_img from '../assets/youtube.png'
import logo from '../assets/organic_logo.jpg'


export default function Footer(){
    return(<footer className='p-3 m-auto text-left'>

      {/* mobile */}
      <div className='xl:hidden p-5'>
        <h2 className='mb-10'>
          <img className='w-24' src={logo} alt="" />
        </h2>
        <ul className='flex gap-2'>
          <li>회사소개</li>
          <li>이용약관</li>
          <li className='font-bold'>개인정보처리방침</li>
          <li>이용안내</li>
        </ul>
        <div className='mt-10'>
            <h3 className='font-bold text-base mb-[10px]'>
              쇼핑몰 기본정보
            </h3>
        <ul className='text-[13px] leading-6'>
          <li className='mr-[10px]'>
            <span className='font-bold mr-[4px]'>상호명</span>
            <span className=' mr-[10px]'>OOO</span>
            <span className='font-bold mr-[4px]'>대표자명</span>
            <span className=''>OOO</span>
          </li>
          <li className='mr-[10px]'>
            <span className='font-bold mr-[4px]'>사업장 주소</span>
            <span className='text-xs'>07071 서울특별시 동작구 보라매로5길 15</span>
          </li>
          <li>
            <span className='font-bold mr-[4px]'>대표전화</span>
            <span className=' mr-[10px]'>OOO</span>
          </li>
          <li>
            <span className='font-bold mr-[4px]'>사업자 등록번호</span>
            <span className=' mr-[10px]'>OOO - OO - OOOOO</span>
          </li>
          <li className='mb-10'>
            <span className='font-bold mr-[4px]'>통신판매업 신고번호</span>
            <span className=' mr-[6px]'>기타</span>
            <span className='font-bold mr-[2px]'>개인정보보호책임자</span>
            <span className='mr-[2px]'>OOO</span>
          </li>
        </ul>

        <div className='text-[13px] leading-4'>
          <h3 className='font-bold text-base mb-[10px]'>
              고객센터 정보
            </h3>
        </div>
        <ul>
          <li className='mb-[10px]'>
            <span className='font-bold mr-[4px] mb-[10px]'>상담/주문 전화</span>
            <span className=' mr-[10px]'>0000-0000</span>
          </li>
          <li className='mb-[10px]'>
            <span className='font-bold mr-[4px]'>상담/주문 이메일</span>
            <span className=' mr-[10px] block'>test@test.com</span>
          </li>
          <li className='mb-10'>
            <span className='font-bold mr-[4px]'>CS운영시간</span>
            <span className=' mr-[10px] block'>09:00 - 18:00 토,일,공휴일 휴무</span>
          </li>
        </ul>
        <div className='text-[13px] leading-4'>
          <h3 className='font-bold text-base mb-[10px]'>은행 0000-000-00000 예금주
            결제정보
            </h3>
        </div>
        <ul>
          <li className='mb-10'>
              <span className='font-bold mr-[4px] text-xs'>무통장 계좌정보</span>
              <span className=' mr-[10px] block'>은행 0000-000-00000 예금주</span>
            </li>
        </ul>
        </div>
        <hr className='border-b border-solid border-gray-200'/>

        {/* sns icon */}
        <ul className='flex justify-start items-center gap-3 mt-[30px]'>
          <li><span className='font-bold'>SNS</span></li>
          <li className='flex gap-2'>
              <a href=""><img className='w-[30px] h[30px]' src={youtube_img} alt=''></img></a>
              <a href=""><img className='w-[30px] h[30px]' src={youtube_img} alt=''></img></a>
              <a href=""><img className='w-[30px] h[30px]' src={youtube_img} alt=''></img></a>
              <a href=""><img className='w-[30px] h[30px]' src={youtube_img} alt=''></img></a>
              <a href=""><img className='w-[30px] h[30px]' src={youtube_img} alt=''></img></a>
              <a href=""><img className='w-[30px] h[30px]' src={youtube_img} alt=''></img></a>
          </li>   
        </ul>
        <p className='text-[#9a9a9a] text-[13px] mt-[20px] mb-[20px]'>
              Copyright © 오가닉. All Rights Reserved. Hosting by Cafe24 Corp.
            </p>
    </div>









    {/* pc 1280px */}
    <div className='xl:block hidden p-9 bg-slate-50 '>
      <div className='w-[92%] m-auto'>
        <h2 className='mb-10'>
          <img src={logo} alt="" />
        </h2>

      <div className='flex justify-between gap-10'>
        <div className='flex flex-col'>
          <ul className='flex gap-2'>
            <li>회사소개</li>
            <li>이용약관</li>
            <li className='font-bold'>개인정보처리방침</li>
            <li>이용안내</li>
          </ul>

          <ul className='text-[13px] leading-6 flex flex-col'>
            <li className='font-bold text-base mt-5 mb-4'>
                쇼핑몰 기본정보
            </li>
            <li className='mr-[10px]'>
              <span className='font-bold mr-[4px]'>상호명</span>
              <span className=' mr-[10px]'>OOO</span>
              <span className='font-bold mr-[4px]'>대표자명</span>
              <span className=''>OOO</span>
            </li>
            <li className='mr-[10px]'>
              <span className='font-bold mr-[4px]'>사업장 주소</span>
              <span className='text-xs'>07071 서울특별시 동작구 보라매로5길 15</span>
            </li>
            <li>
              <span className='font-bold mr-[4px]'>대표전화</span>
              <span className=' mr-[10px]'>OOO</span>
            </li>
            <li>
              <span className='font-bold mr-[4px]'>사업자 등록번호</span>
              <span className=' mr-[10px]'>OOO - OO - OOOOO</span>
            </li>
            <li className='mb-10'>
              <span className='font-bold mr-[4px]'>통신판매업 신고번호</span>
              <span className=' mr-[6px]'>기타</span>
              <span className='font-bold mr-[2px]'>개인정보보호책임자</span>
              <span className='mr-[2px]'>OOO</span>
            </li>
            </ul>
        </div>
  
        <div>
          <h3 className='font-bold text-base mb-[10px]'>
              고객센터 정보
            </h3>
          <ul>
            <li className='mb-[10px]'>
              <span className='font-bold mr-[4px] mb-[10px]'>상담/주문 전화</span>
              <span className=' mr-[10px]'>0000-0000</span>
            </li>
            <li className='mb-[10px]'>
              <span className='font-bold mr-[4px]'>상담/주문 이메일</span>
              <span className=' mr-[10px] block'>test@test.com</span>
            </li>
            <li className='mb-10'>
              <span className='font-bold mr-[4px]'>CS운영시간</span>
              <span className=' mr-[10px] block'>09:00 - 18:00 토,일,공휴일 휴무</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-base mb-[10px] font-bold'>
            결제정보
            </h3>
        <ul>
          <li className='mb-10'>
              <span className='font-bold mr-[4px] text-xs'>무통장 계좌정보</span>
              <span className=' mr-[10px] block'>은행 0000-000-00000 예금주</span>
            </li>
        </ul>
      </div>
      </div>
        <hr className='border-b border-solid border-gray-200 mb-10 mt-10'/>

      {/* sns icon */}
      <div className='flex justify-between items-center'>
        <div>
          <p className='text-[#9a9a9a] text-[13px] mt-[20px] mb-[20px]'>
                Copyright © 오가닉. All Rights Reserved. Hosting by Cafe24 Corp.
          </p>
        </div>
        <ul className='flex items-center gap-3 mt-[30px]'>
          <li>
            <span className='font-bold'>SNS</span>
          </li>
          <li className='flex gap-2'>
              <a href=""><img className='w-[30px] h[30px]' src={youtube_img} alt=''></img></a>
              <a href=""><img className='w-[30px] h[30px]' src={youtube_img} alt=''></img></a>
              <a href=""><img className='w-[30px] h[30px]' src={youtube_img} alt=''></img></a>
              <a href=""><img className='w-[30px] h[30px]' src={youtube_img} alt=''></img></a>
              <a href=""><img className='w-[30px] h[30px]' src={youtube_img} alt=''></img></a>
              <a href=""><img className='w-[30px] h[30px]' src={youtube_img} alt=''></img></a>
          </li>   
        </ul>
      </div>
    </div>
  </div>
      </footer>)
}