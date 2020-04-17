import Layout from '../components/layout';
import { Paper, Button, Card } from '@material-ui/core';
import Link from 'next/link';
import { useFetchUser } from '../hooks/user';

export default function() {
  const { user, userLoading } = useFetchUser();
  return (
    <React.Fragment>
      <Layout user={user} userLoading={userLoading}>
        {user && (
          <div className="button-container-wrapper">
            <div className="button-container">
              <Link href="/dashboard">
                <Button variant="contained" color="primary" size="large">
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        )}
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
