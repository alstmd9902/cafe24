export default function ArticleImg(){
    return(<article className='w-[92%] m-auto mb-[50px]'>

        {/* mobilde */}
        <div className="xl:hidden">
            <img src={"https://file.cafe24cos.com/banner-admin-live/upload/ecudemo276582/315658c6-d58d-483d-cce3-449009350e1f.png"} alt=""/>
        </div>

        {/* pc 1280px */}
        <div className="hidden xl:block">
            <img className="w-[92%] m-auto" src={"https://file.cafe24cos.com/banner-admin-live/upload/ecudemo276582/45eb6083-3982-4ce1-d4b0-043c998d4630.png"} alt="" />
        </div>
    </article>)
}