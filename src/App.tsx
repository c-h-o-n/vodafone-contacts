import useCachedResources from './hooks/useCachedResources';

import Layout from './Layout';
import Providers from './Providers';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <Providers>
      <Layout />
    </Providers>
  );
}
