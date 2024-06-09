'use server';

import { Profile } from '@/components';

export default async function ProfilePage() {
  return <Profile subscribers={0} subscriptions={0} />;
}
