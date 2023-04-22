import fetcher from '@/libs/fetcher';
import useSWR from 'swr';

const useUser = (userId: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    userId ? `/api/users/${userId}` : null,
    fetcher
  );

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};

export default useUser;
