import { useQuery } from '@tanstack/react-query';
import { GetFish } from '../data/fish';
import CatalogGrid from '../components/catalog/CatalogGrid';

export default function FishPage({}) {
  const query = useQuery({
    queryKey: ['fish'],
    queryFn: GetFish,
  });
  if (query.isPending === true) {
    return <div>Loading...</div>;
  } else {
    return <CatalogGrid item={query.data} basePath={'/fish'} />;
  }
}
