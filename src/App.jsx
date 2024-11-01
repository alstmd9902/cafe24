import './App.css'
import search from './assets/search_img.png'
import menu_bar from './assets/menu_img.png'
import logo from './assets/organic_logo.jpg'
import mainmobile_img from './assets/mobile_main.png'
import under_arrow from './assets/under_arrow.png'
import person_icon from './assets/person_img.png'
import cart_icon from './assets/cart_img.png'
import secton1_img from './assets/section1_img.png'
import secton2_img from './assets/section2_img.png'
import secton3_img from './assets/section3_img.png'
import new_img from './assets/new_img.png'
import best_img from './assets/best_img.png'
import section2_1img from './assets/section2-1_img.png'
import section2_2img from './assets/section2-2_img.png'
import section2_3img from './assets/section2-3_img.png'
import banner_arrow from './assets/banner_arrow.svg'
import section3_1img from './assets/article2-1_img.png'
import main_articleimg from './assets/main_article_img.png'
import youtube_img from './assets/youtube.png'
import Header from './components/Header'
import MainArticle from './components/MainArticle'
import OnlyOn from './components/OnlyOn'
import BrandStore from './components/BrandStore'
import MdChoice from './components/MdChoice'
import JoinEvent from './components/JoinEvent'
import OfflineStore from './components/OfflineStore'
import NewArrivals from './components/NewArrivals'
import OnStore from './components/OnStore'
import BestSweller from './components/BestSweller'
import ArticleImg from './components/ArticleImg'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <h1>hello world</h1>
    {/* 해더 영역 */}
    <Header/>

    {/* main 영역 */}
    <MainArticle/>

    {/* new arrivals 영역 */}
    <NewArrivals/>

    {/* on store 영역 */}
    <OnStore/>

    {/* best seller 영역 */}
    <BestSweller/>

    {/* article 이미지구역 */}
    <ArticleImg/>

    {/* only on 구역 */}
    <OnlyOn/>

    {/* brand story */}
    <BrandStore/>

    {/* md's choice 영역 */}
    <MdChoice/>

    {/* join event */}
    <JoinEvent/>

    {/* offline store 구역 */}
    <OfflineStore/>

    {/* footer 구역 */}
    <Footer/>
      
    {/* 탑 이동  */}


    </>
  )
}

export default App
