import { useState } from 'react';
import { Layout } from '@app/components/Layout';
import { Retrieve } from '@app/components/Retrieve';
import { AfterRetrieve } from '@app/features/amulets/AfterRetrieve';
import { ContentLeft, ContentRight, Options } from './components/Content';
import { RetrievingScreen } from './components/RetrievingScreen';

export const RetrieveAmulet: React.FC = () => {
  const [retrieveStatus, setRetrieveStatus] = useState({
    retrieving: false,
    retrieved: false,
  });
  return (
    <Layout>
      {retrieveStatus.retrieved && <AfterRetrieve />}
      {!retrieveStatus.retrieved && (
        <Retrieve>
          <Options />
          <ContentLeft />
          <ContentRight onRetrieve={setRetrieveStatus} />
        </Retrieve>
      )}
      {retrieveStatus.retrieving && <RetrievingScreen />}
    </Layout>
  );
};
