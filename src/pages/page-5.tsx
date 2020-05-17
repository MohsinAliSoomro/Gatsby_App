import React from 'react';
import { PageProps,Link } from "gatsby";

import Layout from '../components/layout';
import SEO from "../components/seo";

const FifthPage =(props:PageProps)=>(
    <Layout>
        <SEO title="Page Fifth"/>
        <h1>Welcome to the fifth Page</h1>
        <p>Welcome the page ({props.path})</p>
        <Link to="/page-2/">go to page 2</Link>
        <Link to="/page-3/">go to page 3</Link>
        <Link to="/page-4/">go to page 3</Link>
        <Link to="/">back to home</Link>
    </Layout>
)
export default FifthPage