const BookCard = ({ book }) => {
  const handleOpenBook = () => {
    const formats = book.formats;
    if (formats['text/html']) {
      window.open(formats['text/html'], '_blank');
    } else if (formats['application/pdf']) {
      window.open(formats['application/pdf'], '_blank');
    } else if (formats['text/plain']) {
      window.open(formats['text/plain'], '_blank');
    } else {
      alert('No readable format available');
    }
  };

  return (
    <div
      className="w-40 p-2 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg"
      onClick={handleOpenBook}
    >
      <img
        src={book.formats['image/jpeg']}
        alt={book.title}
        className="w-full h-56 object-cover rounded-md"
      />
      <h3 className="text-sm font-semibold mt-2 truncate">{book.title}</h3>
      <p className="text-xs text-gray-500 truncate">{book.authors?.[0]?.name}</p>
    </div>
  );
};

export default BookCard;
