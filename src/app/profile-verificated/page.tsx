'use server';

import { Profile } from '@/components';

export default async function ProfilePage() {
  return (
    <Profile
      name='Александр Магомедов'
      avatar='/images/verificated-profile.png'
      subscribers={2}
      subscriptions={10}
    />
  );
}
