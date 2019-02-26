
// imports
import Head from 'next/head';

// components
import Navbar from './Navbar';

const Layout = (props) => (
  <div>
    <Head>
      <title>Price¢oin</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
    </Head>
    <Navbar />
    <div className='container'>
      {props.children}
    </div>
  </div>
);

export default Layout;