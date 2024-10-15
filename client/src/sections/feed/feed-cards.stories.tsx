import { feedData } from 'src/_mock/_feed';
import FeedCards from './feed-cards';

export default {
  title: 'gitstream/components/Feed',
  component: FeedCards,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: { items: feedData },
};
