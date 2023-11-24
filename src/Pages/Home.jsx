
// import TopicBox from  './TopicBox'
// import Navigation from './Navigation'
//  import Images from './Images'
//  import Content from './Content'
//  import HomeLands from './HomeLands'
//  import Facilities from './Facilities'
// import Footer from './Footer'


import TopicBox from '../Components/TopicBox';
import Navigation from '../Components/Navigation';
import Images from '../Components/Images';
import Content from '../Components/Content';
import HomeLands from '../Components/HomeLands';
import Footer from '../Components/Footer';
import Aboutus from '../Components/Aboutus';
import SearchLands from '../Components/SearchLands';
import Facilities from '../Components/Facilities';
import RegisterForm from '../Components/RegisterForm';
import LandCarousel from '../Components/LandCarousel';
import Benefits from '../Components/Benefits';
import SortLands from '../Components/SortLands';
import LandSearch from '../Components/LandSearch';
import Header from '../Components/Header';
import Appointment from '../Components/Service/Appointment';
import PaymentPlans from '../Components/PaymentPlans';


export default function Home() {
  return (
    <div >
      
      <Header/>
      <Navigation/> 

      {/* <TopicBox/> */}

      <Images/>
      <Content/>

      {/* <HomeLands/> */}  
      {/* <Facilities/> */}

      <LandCarousel/>
      <Benefits/>
      <Appointment/>
      <PaymentPlans/>
      {/* <SortLands/> */}
      {/* <LandSerach/> */}
      
      <Footer/> 

      
    
    </div>
  )
}

