// import * as React from 'react';
// import {useDispatch, useSelector} from "react-redux";

// import { RootState } from 'store/index';
// import { applyGetUsers } from 'store/rest';

// import { User } from 'models/user';

// function ApiRestPage () {
//   const dispatch = useDispatch();

//   React.useEffect(()=>{
//     dispatch(applyGetUsers())
//   }, []);

//   const usersList = useSelector((state: RootState) => state.rest.users);

//   // if (loading) return <div>로딩중..</div>;
//   // if (error) return <div>에러가 발생했습니다.</div>;
//   // if (!usersList) return <div>No data...</div>;
//   return (
//     <div className="api-rest-page">
//       <h3>REST API Test space</h3>
//       <ul>
//         {usersList.map((user: User) => (
//           <li key={user.id}>
//             {user.username} ({user.name})
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default ApiRestPage;