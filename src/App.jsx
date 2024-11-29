import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './component/Topbar';
import Footer from './component/Footer';
import Hero from './component/Hero';
import MyCarousel from './component/MyCarousel';

function App() {
 

  return (
    <>
      <Topbar />
      <Hero />
      <MyCarousel searchQuery = "Star Wars" />
      <MyCarousel searchQuery = "Harry Potter" />
      <MyCarousel searchQuery = "Lord of the Rings" />
      <MyCarousel searchQuery = "Back to the future" />

      <Footer />
    </>
  )
}

export default App
