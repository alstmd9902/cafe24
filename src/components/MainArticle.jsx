import mainmobile_img from '../assets/mobile_main.png'

export default function MainArticle(){
    return (<article className='w-full relative mb-[120px]'>
        <img src={mainmobile_img} alt="" />
      <div className='w-3 h-3 rounded-md bg-black absolute bottom-1 left-1/2'></div>
      <div className='w-3 h-3 rounded-md bg-[rgba(0,0,0,0.4)] absolute bottom-1  left-1/2 mx-5'></div>
    </article>)
    
}