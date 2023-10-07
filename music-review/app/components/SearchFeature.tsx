'use client'

import React, { useState } from 'react'

interface SearchFeatureComponent {
  onSearch: (query: string) => void;
}

const SearchFeature: React.FC<SearchFeatureComponent> = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
  
        // Redirect user to search-result page, where we query the Spotify API
        // window.location.href = "/search_results/${searchQuery}";
        onSearch(searchQuery)
    }

    return (
      <form className="w-1/2 mx-auto">
        <input
          type="text"
          className="input input-bordered input-secondary w-full max-w-sm mb-5"
          placeholder="Enter a song name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          >
        </input>
          <button 
            className="btn btn-outline btn-secondary"
            type="submit"
          >
            Search
          </button>
      </form>
    )
}

export default SearchFeature
