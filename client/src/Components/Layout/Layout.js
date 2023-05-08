import React from 'react'
import Footer from './Footer'
import Header from './Header'
import {Helmet} from "react-helmet";
import { Toaster } from 'react-hot-toast';



const layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
      <Helmet>
                
  <meta charSet="utf-8" />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />
  <title>{title}</title>

            </Helmet>

      <Header/>
      <main  style={{minHeight:"78vh"}}>
      <Toaster />
         {children} 
         </main>
      
      
     <Footer/>

     
    </div>
  )
}

layout.defaultProps = {
  title:"Ecommerce App - Shop now",
  description:"mern stack",
  keywords:"mern,react,node,mongodb",
  author:"Hittok",
}

export default layout
