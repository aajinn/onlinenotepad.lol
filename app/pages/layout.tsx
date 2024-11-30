import { FC } from 'react';
import NavBar from '../components/NavBar';

const Layout: FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    return (
        <div className="layout">
            <NavBar />
            {children}
        </div>
    );
};

export default Layout;
