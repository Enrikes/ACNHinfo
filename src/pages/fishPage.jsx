import { useQuery } from '@tanstack/react-query';
import { GetFish } from '../data/fish';
import CatalogGrid from '../components/catalog/CatalogGrid';

export default function FishPage({}) {
  const query = useQuery({
    queryKey: ['fish'],
    queryFn: GetFish,
  });
  console.log(query.data);
  return <CatalogGrid data={query.data} />;
}
