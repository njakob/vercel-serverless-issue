import type { GetStaticPaths, GetStaticProps } from 'next';

type Params = {
  key: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths: { params: Params }[] = [];

  for (let index = 0; index < 1000; index++) {
    paths.push({
      params: {
        key: String(index),
      },
    });
  }

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  return {
    props: {
      keyParam: params?.key ?? 'empty',
    },
  };
};

type Props = {
  keyParam: string;
};

export default function SomethingPage({ keyParam }: Props) {
  return <div>{keyParam}</div>;
}