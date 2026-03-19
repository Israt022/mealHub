import { AlarmClockMinus } from 'lucide-react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import axios from 'axios'
import MealItems from './components/MealItems/MealItems'
import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer/Footer'

function App() {
  const mealPromise = axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then(res => res.data);
  // const singleMealPromise = axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`).then(res => res.data);

  return (
    <>
    <header>
      <Navbar></Navbar>
      <HeroSection/>
    </header>
    <main className=''>
      <Suspense fallback={
        <div className="flex justify-center items-center h-[80vh]">
            <span className="loading loading-spinner text-warning text-center"></span>
        </div> 
      }>
        <MealItems mealPromise={mealPromise}/>
      </Suspense>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      style={{ zIndex: 9999 }}
    />
    </> 
  )
}

export default App
