import React from 'react';
import { Row } from 'reactstrap';
//import IntlMessages from '../../helpers/IntlMessages';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Breadcrumb from '../../containers/navs/Breadcrumb';

//drizzle
const Drizzle = React.lazy(() => import(/* webpackChunkName: "App" */ '../../components/drizzle'));

const BlankPage = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Plant Trees" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <button class="enableEthereumButton">Enable Ethereum</button>
          <Drizzle />
        </Colxx>
      </Row>
    </>
  );
};

export default BlankPage;
