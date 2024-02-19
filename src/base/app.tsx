import React, { useEffect, useState } from 'react';

import { Spinner } from 'native-base';
import { Outlet, useNavigate } from 'react-router-dom';

import { User, UserContext } from '../context/user-context';
import getUser from '../services/user-service';

import Layout from './layout';

// the file where redirect and log in logic can happen
// going to grab fake user for now
const App: React.FunctionComponent = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const navigate = useNavigate();

  const handleUser = async () => {
    setUser(await getUser());
  };

  useEffect(() => {
    handleUser();
  }, []);

  useEffect(() => {
    if (user?.email) {
      navigate('/nav-fun');
    }
  }, [user?.email]);

  if (!user) {
    return (
      <Spinner
        height="100vh"
        accessibilityLabel="Loading user"
        color="orange.300"
      />
    );
  }

  return (
    <UserContext.Provider value={user}>
      <Layout>
        <Outlet />
      </Layout>
    </UserContext.Provider>
  );
};

export default App;
