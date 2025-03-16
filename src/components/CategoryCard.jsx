// import { useNavigate } from 'react-router-dom';

// const CategoryCard = ({ icon, label, path }) => {
//   const navigate = useNavigate();

//   return (
//     <div
//       onClick={() => navigate(`/category/${path}`)}
//       className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg cursor-pointer hover:bg-gray-100"
//     >
//       <div className="flex items-center space-x-3">
//         {icon}
//         <span className="text-lg font-semibold">{label}</span>
//       </div>
//       <span>➡️</span>
//     </div>
//   );
// };

// export default CategoryCard;


import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ label, icon,path  }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/category/${path.toLowerCase()}`)}
      className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105"
    >
      <div className="flex items-center">
        <span className="text-2xl mr-4">{icon}</span>
        <span className="text-lg font-medium text-gray-700">{label}</span>
      </div>
      <span className="text-blue-500 text-xl">→</span>
    </div>
  );
};

export default CategoryCard;
