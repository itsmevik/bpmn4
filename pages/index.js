import Layout from '../components/layout';
import { Paper, Button, Card } from '@material-ui/core';
import Link from 'next/link';

export default function() {
  return (
    <React.Fragment>
      <Layout>
        <div className="button-container-wrapper">
          <div className="button-container">
            <Link href="/bpmn">
              <Button variant="contained" color="primary" size="large">
                Add New
              </Button>
            </Link>
            <Button variant="outlined" color="secondary" size="large">
              Open
            </Button>
          </div>
        </div>
      </Layout>
      <style>{`
        .button-container-wrapper{
            display:flex;
            justify-content:center;
            align-items:center;
            vertical-align:middle;
            height:100%
        }
        .button-container {
          width: 400px;
          height:400px;
          display:flex;
          justify-content:space-evenly;
          align-items:center
        }
        p {
          color: blue;
        }
      `}</style>
    </React.Fragment>
  );
}
