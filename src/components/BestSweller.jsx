import best_img from '../assets/best_img.png'

export default function BestSweller(){
    
    return(
    <article className='w-[92%] m-auto text-center mb-[50px]'>

    {/* mobile */}
    <div className='xl:hidden'>
        <div className='mb-5'>
            <h2 className='font-bold text-lg uppercase leading-2'>
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
        <div className='flex justify-center items-center flex-wrap gap-4'>
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
    </div>

    {/* pc 1280px */}
    <div className='hidden xl:block'>
        <div className='mb-5'>
            <h2 className='font-bold text-2xl uppercase leading-2'>
                best! seller
            </h2>
            <p className='text-[#9a9a9a] mt-[8px] text-sm'>
                베스트 셀러를 만나보세요
            </p>
            </div>

            <div className='flex justify-center items-center'>
                <ul className='flex gap-5 text-[#9a9a9a] mb-8 text-[17px]'>
                    <li className='text-black border-b border-solid border-gray-400'>과일/채소</li>
                    <li>쌀/잡곡/견과</li>
                    <li>정육/계란류</li>
                    <li>밀키트</li>
                </ul>
            </div>

        {/* seller 이미지 */}
        <section className='w-[92%] m-auto gap-20 flex flex-col'>

            <div className='w- h-full flex justify-center gap-4'>
                <ul className='w-full relative group'>
                    <li>
                        <a href="">
                            <img src={"https://ecudemo276582.cafe24.com/web/product/medium/202304/91773e23bdb5734e9a90c23d059a81ec.png"} alt="채소" />
                            <img className='absolute top-0' src={best_img} alt="" />
                        </a>
                    </li>
                    <li className='text-left mt-5 text-xs cursor-pointer'>
                        <a href="">
                            <span className='block mb-3'>산지직송 유기농 채소</span>
                        </a>
                            <span className='block text-sm font-bold'>50,000원</span>
                    </li>
                        <a href='' className='w-full absolute flex 
                    justify-center items-center top-[35%]'>
                        <button className='opacity-0 rounded-[10px] border border-[#999] px-[25px] py-[10px] text-[11px] leading-none bg-[rgba(255,255,255,0.7)] mx-[3px] hover:bg-black hover:text-white cursor-pointer group-hover:opacity-100 group-hover:transition duration-[1s]'>
                            WISH
                        </button>
                        <button className='opacity-0 rounded-[10px] border border-gray-200 px-[25px] py-[10px] text-[11px] leading-none bg-[rgba(255,255,255,0.7)] mx-[3px] hover:bg-black hover:text-white cursor-pointer
                        group-hover:opacity-100 group-hover:transition duration-[1s]'>
                            ADD
                        </button>
                    </a>
                </ul>
        

                <ul className='relative w-full'>
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
                    <a href='' className='w-full absolute flex 
                    justify-center items-center top-[35%]'>
                        <button className='opacity-0 rounded-[10px] border border-[#999] px-[25px] py-[10px] text-[11px] leading-none bg-[rgba(255,255,255,0.7)] mx-[3px] hover:bg-black hover:text-white cursor-pointer group-hover:opacity-100 group-hover:transition duration-[1s]'>
                            WISH
                        </button>
                        <button className='opacity-0 rounded-[10px] border border-gray-200 px-[25px] py-[10px] text-[11px] leading-none bg-[rgba(255,255,255,0.7)] mx-[3px] hover:bg-black hover:text-white cursor-pointer
                        group-hover:opacity-100 group-hover:transition duration-[1s]'>
                            ADD
                        </button>
                    </a>
                </ul>
                
                <ul className='relative w-full'>
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

                <ul className='relative w-full'>
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

            <div className='w- h-full flex justify-center gap-4'>
                <ul className='w-full relative'>
                    <li>
                        <a href="">
                            <img src={"https://ecudemo276582.cafe24.com/web/product/medium/202304/91773e23bdb5734e9a90c23d059a81ec.png"} alt="채소" />
                            <img className='absolute top-0' src={best_img} alt="" />
                        </a>
                    </li>
                    <li className='text-left mt-5 text-xs cursor-pointer'>
                        <a href="">
                            <span className='block mb-3'>산지직송 유기농 채소</span>
                        </a>
                            <span className='block text-sm font-bold'>50,000원</span>
                    </li>
                </ul>

                <ul className='relative w-full'>
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
                
                <ul className='relative w-full'>
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

                <ul className='relative w-full'>
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
        </section>
    </div>
    </article>)
    
}