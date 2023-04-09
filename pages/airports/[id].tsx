import { GetServerSideProps } from "next";
import Head from "next/head";


// export const getServerSideProps:GetServerSideProps = async (context) => {
//   const { id } = context.params;
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   const data = await response.json();

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { contact: data },
//   }
// };

const Airport = () => (
  <>
    <Head>
      <title>Airport page</title>
    </Head>
  </>
);

export default Airport;
