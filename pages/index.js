import Error from 'next/error';

export default function Home() {
  try {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <Error statusCode={500} />;
  }
}
