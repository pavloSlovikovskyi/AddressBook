function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-4 border-2 border-gray-300 bg-white text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors text-sm"
      />
    </div>
  );
}

export default SearchBar;
