import { Helmet } from 'react-helmet';

const styles = {
  container: {
        display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '30px',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <h1 style={styles.title}>Зроби свою, книгу контактів!</h1>
    </div>
  );
};

export default HomePage;