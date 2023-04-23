import useUser from '@/hooks/useUser';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userId, isLarge, hasBorder }) => {
  const router = useRouter();

  const { data: fetchedUser } = useUser(userId);
  const handleClick = useCallback(
    (e: any) => {
      e.stopPropagation();

      const url = `/users/${userId}`;
      router.push(url);
    },
    [userId, router]
  );

  return (
    <div
      className={`
      ${hasBorder ? 'border-4 border-black' : ''}
      ${isLarge ? 'w-24' : 'w-12'}
      ${isLarge ? 'h-24' : 'h-12'}
      rounded-full
      hover:opacity-90
      cursor-pointer
      transition
      relative
    `}
    >
      <Image
        fill
        style={{
          objectFit: 'cover',
          borderRadius: '100%',
        }}
        src={fetchedUser?.profileImg || '/images/placeholder.png'}
        alt='Avatar'
      />
    </div>
  );
};

export default Avatar;
