import React from 'react';
import { Row } from 'reactstrap';
//import IntlMessages from '../../helpers/IntlMessages';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Breadcrumb from '../../containers/navs/Breadcrumb';

//drizzle
const Drizzle = React.lazy(() => import(/* webpackChunkName: "App" */ '../../components/drizzle'));

const New = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Transfer Trees" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Drizzle />
        </Colxx>
      </Row>
    </>
  );
};

export default New;
