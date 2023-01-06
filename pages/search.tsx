import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  return {
    props: {
      query: typeof query.q === 'string' ? query.q : '',
    },
  };
}

type Props = {
  query: string;
};

export default function SearchPage({ query }: Props) {
  return (
    <div>{query}</div>
  );
}