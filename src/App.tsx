import { Navigate, Route, Routes } from 'react-router-dom';
import styles from "./App.module.scss";
import './styles/global.scss'
import { Container, Header } from './components';
import { HomePage, FavoritesPage } from './pages';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />

      <Container>
        <main className={styles.main}>
          <Routes>
            <Route path="/spaceX/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />

            {/* <Route path="*" element={<ErrorPage />} /> */}
            <Route path="/home" element={<Navigate to="/spaceX/" replace />} />
          </Routes>

        </main>
      </Container>
    </div>
  );
};

export default App;
