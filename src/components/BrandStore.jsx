export default function BrandStore(){
    return(<article className='w-[92%] m-auto text-center overflow-hidden mb-[50px] xl:mb-[120px]'>
        <div className='mb-5'>
          <h2 className='font-bold text-lg xl:text-2xl uppercase  leading-2'>
            brand story
            </h2>
          <p className='text-[#9a9a9a] mt-[8px]'>
          친환경 식재료로 건강한 라이프스타일을 제안합니다.
          </p>
        </div>
        <video  controls autoPlay name="media">
          <source
            src="https://m-img.cafe24.com/images/ec/sde/video/organic_1280x720.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        </article>)
}