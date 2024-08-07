import { Header } from '../header/Header';
import './Layout.css';

interface LayoutProps {
    children?: React.ReactNode,
    headerTitle?: string;
}

export const Layout: React.FC<LayoutProps> = ({
    children,
    headerTitle
}) => {
    return (
        <>
            <main>
                <Header title={headerTitle} />
                <div className='page-content'>{children}</div>
            </main>
        </>
    );
}