import { useQuery } from '@tanstack/react-query';
import { GetInsect } from '../data/insect';
import CatalogGrid from '../components/catalog/CatalogGrid';

export default function InsectPage({}) {
  const query = useQuery({
    queryKey: ['insect'],
    queryFn: GetInsect,
  });
  if (query.isPending === true) {
    return <div>Loading...</div>;
  } else {
    return <CatalogGrid item={query.data} />;
  }
}
