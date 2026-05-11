import { observer } from 'mobx-react-lite';

import { useViewModel } from 'src/shared/lib';
import { RegionsViewModel } from '../model/RegionsViewModel';

export const RegionsPage = observer(() => {
  const vm = useViewModel(RegionsViewModel);
  const edges = vm.request.data?.regionses.edges ?? [];

  if (vm.request.isLoading && !vm.request.isLoaded) {
    return <p>Loading regions…</p>;
  }

  if (vm.request.error) {
    return <p role="alert">Failed to load regions.</p>;
  }

  return (
    <main>
      <h1>Regions</h1>
      <ul>
        {edges.map(({ node }) => (
          <li key={node.id}>
            <strong>{node.data.name.en}</strong>
            {node.data.description.en ? <> — {node.data.description.en}</> : null}
            <small> ({node.data.climate})</small>
          </li>
        ))}
      </ul>
    </main>
  );
});
