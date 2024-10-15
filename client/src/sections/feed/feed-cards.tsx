import { Stack } from '@mui/material';
import RepositoryCard from 'src/components/repository/repository-card';

const FeedCards = ({ items }: { items: any }) => {
  return (
    <Stack spacing={2}>
      {items.map((item: any) => (
        <RepositoryCard key={item.id} {...item} />
      ))}
    </Stack>
  );
};

export default FeedCards;
