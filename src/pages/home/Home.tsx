import { Layout } from '../../components';
import './Home.css';

interface HomeProps { }

export const Home: React.FC<HomeProps> = () => {
    return (
        <Layout>
            <h1>Home</h1>
        </Layout>
    );
}