import { useParams } from 'react-router';
import Return from '../../components/detail/returnButton';
import styles from './creatureDetail.module.css';
import Profile from '../../components/detail/profile';
import { useQuery } from '@tanstack/react-query';
import { GetSingleCreature } from '../../data/singleCreature';

export default function CreatureDetail({}) {
  const { catergory, slug } = useParams();

  const query = useQuery({
    queryKey: ['creature'],
    queryFn: () => GetSingleCreature(slug),
  });

  if (query.isPending === true) {
    return <div>Loading...</div>;
  } else {
    const creature = query.data[0];
    console.log(creature);
    return (
      <div>
        <Return basePath={catergory} />
        <div className={styles.container}>
          <Profile
            name={creature.name}
            catchPhrase={creature.catchPhrase}
            price={creature.sell}
            location={creature.WhereHow}
            image={creature.critterpediaImage}
          />
        </div>
      </div>
    );
  }
}
