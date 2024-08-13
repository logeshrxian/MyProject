import React from "react"
import HeaderIcons from '../../NavBar Component/HeaderIcons'
import FirstSlide from '../../NavBar Component/FirstSlide'
import CollectionShowcase from '../../NavBar Component/CollectionShowcase/CollectionShowcase'
import EaringsGallery from "../../NavBar Component/CollectionShowcase/EaringsGallery"
import MJValues from "../../NavBar Component/CollectionShowcase/Value"
import Trending from "../../NavBar Component/CollectionShowcase/Trending"
import Blog from "../../NavBar Component/CollectionShowcase/Blog"


const Home = () =>{
    
    return(
        <>
          <HeaderIcons/>
          <FirstSlide/>
          <CollectionShowcase/>
          <EaringsGallery/>
          <MJValues/>
          <Trending/>
          <Blog/>
          
        </>
    )
}

export default Home