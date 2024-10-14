import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ProductsView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Feed - ${CONFIG.appName}`}</title>
      </Helmet>
      <ProductsView />
    </>
  );
}
