import './Header.css';

interface HeaderProps {
    title?: string;
}

export const Header: React.FC<HeaderProps> = ({
    title
}) => {
    return (
        <nav className='app-header'>
            <div className='page-title'>{title}</div>
        </nav>
    );
}