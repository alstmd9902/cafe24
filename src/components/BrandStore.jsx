export default function BrandStore(){
    return(<article className='w-[92%] m-auto text-center overflow-hidden mb-[50px]'>
        <div className='mb-5'>
          <h2 className='font-bold text-lg uppercase font-[Montserrat,"Noto Sans Kr"] leading-2'>
            brand story
            </h2>
          <p className='text-[#9a9a9a] mt-[8px] font-[700] font-[Montserrat,"Noto Sans Kr"]'>
          친환경 식재료로 건강한 라이프스타일을 제안합니다.
          </p>
        </div>
        <video class="h-full w-full rounded-lg" controls>
          <source
            src="https://m-img.cafe24.com/images/ec/sde/video/organic_1280x720.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        </article>)
}