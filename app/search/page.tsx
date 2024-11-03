import fetchSearch from "@/lib/fetchSearch";

type Props = {
  searchParams: {
    q: string;
  };
};

async function SearchPage({ searchParams }: Props) {
  const query = await Promise.resolve(searchParams.q);
  console.log(query);
  const results = await fetchSearch(query);
  return <div>SearchPage</div>;
}
export default SearchPage;
