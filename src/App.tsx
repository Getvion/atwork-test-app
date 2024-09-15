import { Main, Profile } from 'pages';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from 'widgets';

const Loading = () => <h2>🌀 Loading...</h2>;

export const App = () => (
  <div className='app'>
    <Header userName='ivan1234' />
    <main className='main'>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </Suspense>
    </main>
  </div>
);
