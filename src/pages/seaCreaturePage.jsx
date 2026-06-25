import { useQuery } from '@tanstack/react-query';
import { GetSeaCreature } from '../data/seaCreature';
import CatalogGrid from '../components/catalog/CatalogGrid';

export default function SeaCreaturePage({}) {
  const query = useQuery({
    queryKey: ['seaCreature'],
    queryFn: GetSeaCreature,
  });
  if (query.isPending === true) {
    return <div>Loading...</div>;
  } else {
    return <CatalogGrid item={query.data} />;
  }
}
