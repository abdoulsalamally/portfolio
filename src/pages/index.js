import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo/Seo"
import Main from "../containers/Main"
import '../styles/index.css'
import '../styles/font-awesome/css/all.css'


const IndexPage = () => (
  <>
    <SEO 
      title="Abdoul Salam Ally"
      desc="Software Engineer. Abdoul Salam Ally's personal website." 
    />
    <Main />
  </>
)

export default IndexPage
