import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { FeedView } from 'src/sections/feed/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Feed - ${CONFIG.appName}`}</title>
      </Helmet>
      <FeedView />
    </>
  );
}
