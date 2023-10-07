// import { useRouter } from 'next/router' // Routes to search-results page
import SearchFeature from './components/SearchFeature'

export default function Home() {
  const handleSearch = (query: string) => {
    console.log({query})
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r via-purple-400 p-4 mt-5 mr-8">
        <button className="btn btn-outline btn-secondary float-right">
          <a href="/my_reviews">
            My Reviews
          </a>
        </button>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl mb-10">Aggie Music Review</h1>
          <SearchFeature onSearch={handleSearch}/>
        </div>
      </main>
    </div>
  )
}
