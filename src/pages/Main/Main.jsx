import React from 'react';
import { Helmet } from 'react-helmet';

import { Navbar, Footer, Landing, About, Skills, Education, Contacts, Projects, } from '../../components';
import { headerData } from '../../data/headerData';

const Main = () => {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main;