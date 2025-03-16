import CategoryCard from '../components/CategoryCard';
import Pattern from '../assets/Pattern.svg';

const categories = [
  { label: 'Fiction', icon: '📖', path: 'fiction' },
  { label: 'Drama', icon: '🎭', path: 'drama' },
  { label: 'Humor', icon: '😆', path: 'humor' },
  { label: 'Politics', icon: '🏛️', path: 'politics' },
  { label: 'Philosophy', icon: '☯️', path: 'philosophy' },
  { label: 'History', icon: '📜', path: 'history' },
  { label: 'Adventure', icon: '🧭', path: 'adventure' },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div style={{ backgroundImage: `url(${Pattern})` }}>

      <h1
        className="text-3xl font-bold text-indigo-600 p-4 bg-cover bg-center"
        // style={{ backgroundImage: `url(${Pattern})` }}
      >
        Gutenberg Project
      </h1>

      <p
        className="text-gray-600 bg-cover p-4 bg-center"
        // style={{ backgroundImage: `url(${Pattern})` }}
      >
        A social cataloging website that allows you to freely search its database of books, annotations, and reviews.
      </p>
      </div>

      <div className="space-y-4">
        {categories.map((category) => (
          <CategoryCard key={category.path} {...category} />
        ))}
      </div>
    </div>

  );
};

export default Home;
