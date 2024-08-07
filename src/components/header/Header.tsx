import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import { FaArrowLeft } from "react-icons/fa6";
import { useState, useLayoutEffect } from 'react';

interface HeaderProps {
    title?: string;
}

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export const Header: React.FC<HeaderProps> = ({
    title
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const canGoBack = location.key === 'default';
    const [width, height] = useWindowSize();

    return (
        <nav className='app-header'>
            {
                canGoBack && width < 900 &&
                <div className='page-back' onClick={() => navigate(-1)}>
                    <FaArrowLeft />
                </div>
            }
            <div className='page-title'>{title}</div>
        </nav>
    );
}