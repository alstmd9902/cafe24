import best_img from '../assets/best_img.png'

export default function BestSweller(){
    
    return(<article className='w-[92%] m-auto text-center mb-[50px]'>
        <div className='mb-5'>
            <h2 className='font-bold text-lg uppercase'>
                best! seller
            </h2>
            <p className='text-[#9a9a9a] mt-[8px] font-[700]'>
                베스트 셀러를 만나보세요
            </p>
            </div>

            <div className='flex justify-center items-center'>
            <ul className='flex gap-5 text-[#9a9a9a] mb-[30px]'>
                <li className='text-black border-b border-solid border-gray-400'>과일/채소</li>
                <li>쌀/잡곡/견과</li>
                <li>정육/계란류</li>
                <li>밀키트</li>
            </ul>
        </div>

        {/* seller 이미지 */}
        <div className='flex flex-wrap justify-center items-center gap-4'>
            <ul className='relative w-[46%]'>
                <li>
                    <a href="">
                    <img src={"https://ecudemo276582.cafe24.com/web/product/medium/202304/91773e23bdb5734e9a90c23d059a81ec.png"} alt="채소" />
                    <img className='absolute top-0' src={best_img} alt="" />
                    </a>
                </li>
                <li className='text-left mt-[10px] text-xs cursor-pointer'>
                    <a href="">
                    <span className='block mb-[5px]'>산지직송 유기농 채소</span>
                    </a>
                    <span className='block mb-[5px] text-sm font-bold'>50,000원</span>
                </li>
            </ul>

            <ul className='relative w-[46%]'>
            <li>
                <a href="">
                <img src={"https://ecudemo276582.cafe24.com/web/product/medium/202304/91773e23bdb5734e9a90c23d059a81ec.png"} alt="채소" />
                <img className='absolute top-0' src={best_img} alt="" />
                </a>
            </li>
            <li className='text-left mt-[10px] text-xs cursor-pointer'>
                <a href="">
                <span className='block mb-[5px]'>산지직송 유기농 채소</span>
                </a>
                <span className='block mb-[5px] text-sm font-bold'>50,000원</span>
            </li>
            </ul>
            
            <ul className='relative w-[46%]'>
            <li>
                <a href="">
                <img src={"https://ecudemo276582.cafe24.com/web/product/medium/202304/91773e23bdb5734e9a90c23d059a81ec.png"} alt="채소" />
                <img className='absolute top-0' src={best_img} alt="" />
                </a>
            </li>
            <li className='text-left mt-[10px] text-xs cursor-pointer'>
                <a href="">
                <span className='block mb-[5px]'>산지직송 유기농 채소</span>
                </a>
                <span className='block mb-[5px] text-sm font-bold'>50,000원</span>
            </li>
            </ul>

            <ul className='relative w-[46%]'>
            <li>
                <a href="">
                <img src={"https://ecudemo276582.cafe24.com/web/product/medium/202304/91773e23bdb5734e9a90c23d059a81ec.png"} alt="채소" />
                <img className='absolute top-0' src={best_img} alt="" />
                </a>
            </li>
            <li className='text-left mt-[10px] text-xs cursor-pointer'>
                <a href="">
                <span className='block mb-[5px]'>산지직송 유기농 채소</span>
                </a>
                <span className='block mb-[5px] text-sm font-bold'>50,000원</span>
            </li>
            </ul>

            <ul className='relative w-[46%]'>
            <li>
                <a href="">
                <img src={"https://ecudemo276582.cafe24.com/web/product/medium/202304/91773e23bdb5734e9a90c23d059a81ec.png"} alt="채소" />
                <img className='absolute top-0' src={best_img} alt="" />
                </a>
            </li>
            <li className='text-left mt-[10px] text-xs cursor-pointer'>
                <a href="">
                <span className='block mb-[5px]'>산지직송 유기농 채소</span>
                </a>
                <span className='block mb-[5px] text-sm font-bold'>50,000원</span>
            </li>
            </ul>

            <ul className='relative w-[46%]'>
            <li>
                <a href="">
                <img src={"https://ecudemo276582.cafe24.com/web/product/medium/202304/91773e23bdb5734e9a90c23d059a81ec.png"} alt="채소" />
                <img className='absolute top-0' src={best_img} alt="" />
                </a>
            </li>
            <li className='text-left mt-[10px] text-xs cursor-pointer'>
                <a href="">
                <span className='block mb-[5px]'>산지직송 유기농 채소</span>
                </a>
                <span className='block mb-[5px] text-sm font-bold'>50,000원</span>
            </li>
            </ul>
        </div>
    </article>)
    
}