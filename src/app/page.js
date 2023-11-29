'use client'
import HomeAbout from '@/components/Home/About'
import Banner from '@/components/Home/Banner'
import Categories from '@/components/Home/CategoriesList'
import Searchbar from '@/components/Home/SearchBar'
import ProductList from '@/components/Products/ProductList'

export default function Home() {
  return (
    <>
      <Banner />
      <Searchbar />
      <hr className='border-b border-gray-300 mx-6' />
      <Categories />
      <hr className='border-b border-gray-300 mx-6' />
      <HomeAbout />
    </>

  )
}
