import React from 'react';
import Navigation from '../components/navigation';


const BaseLayout = ({ children }) => (
    <>
        <Navigation />
        <main className="main">
            {children}
        </main>
        
        <header className="header"></header>
        <footer className="footer">  
        
        <strong>Contactanos!!</strong>  <a href="https://www.facebook.com/El-Technodromo-1620315061532375/?ref=bookmarks"><img src="https://abeon-hosting.com/images/face-logo-png-4.png" width="30" alt="Face"/></a>
        <a href="https://twitter.com/Aleltechno"><img src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" width="40" alt="Twit"/></a>
        <a href="https://www.youtube.com/channel/UCWsAEhJivJOkF2_ePZI1YPQ?view_as=subscriber"><img src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c545.png" width="40px" alt="You"></img></a>

        </footer>
    </>
);

export default BaseLayout;