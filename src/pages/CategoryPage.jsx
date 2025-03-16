import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BookCard from '../components/BookCard';

const CategoryPage = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBooks(category, searchTerm);
  }, [category, searchTerm]);

  const fetchBooks = async (topic, search) => {
    try {
      const { data } = await axios.get('http://skunkworks.ignitesol.com:8000/books', {
        params: {
          topic,
          search
        }
      });
      setBooks(data.results);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="flex items-center mb-4">
        <button onClick={() => window.history.back()} className="text-indigo-600 text-xl mr-2">
          ←
        </button>
        <h2 className="text-2xl font-bold text-indigo-600 capitalize">{category}</h2>
      </div>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
