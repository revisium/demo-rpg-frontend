import { Link } from 'react-router';

export default function HomeRoute() {
  return (
    <main>
      <h1>Branching Tales</h1>
      <p>Demo RPG powered by Revisium federated GraphQL.</p>
      <p>
        <Link to="/regions">Browse regions →</Link>
      </p>
    </main>
  );
}
