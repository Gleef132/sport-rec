import { Profile } from '@/components';

export default function ProfilePage() {
  return (
    <Profile
      name='Александр Магомедов'
      avatar='./images/verificated-profile.png'
      subscribers={2}
      subscriptions={10}
    />
  );
}
