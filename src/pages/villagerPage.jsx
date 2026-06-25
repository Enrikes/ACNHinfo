import { useQuery } from '@tanstack/react-query';
import { GetVillager } from '../data/villager';
import CatalogGrid from '../components/catalog/CatalogGrid';

export default function VillagerPage({}) {
  const query = useQuery({
    queryKey: ['villager'],
    queryFn: GetVillager,
  });
  if (query.isPending === true) {
    return <div>Loading...</div>;
  } else {
    return <CatalogGrid item={query.data} />;
  }
}
