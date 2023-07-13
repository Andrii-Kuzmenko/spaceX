import { Navigate, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Container, Header } from './components';
import {
  HomePage,
  FavoritesPage,
  ErrorPage,
  ToursPage,
  AboutPage,
  HelpPage
} from './pages';

import './styles/global.scss'

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Header />

      <Container>
        <main>
          <Routes>
            <Route path="/spaceX/">
              <Route index element={<HomePage />} />
              <Route path="favorites" element={<FavoritesPage />} />
              <Route path="tours" element={<ToursPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="help" element={<HelpPage />} />
            </Route>

            <Route path="*" element={<ErrorPage />} />
            <Route path="/home" element={<Navigate to="/spaceX/" replace />} />
          </Routes>

        </main>
      </Container>
    </RecoilRoot>
  );
};

export default App;
