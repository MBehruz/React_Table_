// import React from 'react'
// import Test from './Test'
// import './App.css'
// const App = () => {

//   return (
//     <div>
//       <Test />
//     </div>
//   )
// }

// export default App

import React, { useMemo } from 'react'
import Test from './Test'
import './App.css'
import mData from './MOC_DATA.json'
import { DateTime } from 'luxon'
import movies from './MOVIE_DATA.json'
import TableSearch from './TableSearch'
const App = () => {
  // const data = useMemo(() => mData, []);
  // const columns = [
  //   { header: 'ID', accessorKey: 'id', footer: 'ID' },
  //   ///  2 qator korsatadi first name last name larni    ///
  //   {
  //     header: 'Name',
  //     columns: [
  //       {
  //         header: 'Firs ',
  //         accessorKey: 'first_name',
  //         footer: 'First Name',
  //       },
  //       { header: 'Last ', accessorKey: 'first_name', footer: 'Last Name' },
  //     ],
  //   },

  //   ////  first name va last name ni qoshib chiqaradi   ////
  //   // {
  //   //   header: 'Name',
  //   //   accessorFn: (row) => (row = `${row.first_name} ${row.last_name}`),
  //   // },

  //   ////  first name va last name ni chiqaradi   ////
  //   // { header: 'Firs Name', accessorKey: 'first_name', footer: 'First Name' },
  //   // { header: 'Last Name', accessorKey: 'first_name', footer: 'Last Name' },

  //   { header: 'E-mail', accessorKey: 'email', footer: 'e-mail' },
  //   { header: 'Gender', accessorKey: 'gender', footer: 'Gender' },
  //   {
  //     header: 'Date of birth',
  //     accessorKey: 'dob',
  //     footer: 'Date of birth',
  //     cell: info =>
  //       DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
  //   },
  // ];

  const data = useMemo(() => movies, []);
  const movieColumns = [
    { header: "ID", accessorKey: "id" },
    { header: "Name", accessorKey: "name" },
    { header: "Genre", accessorKey: "genre" },
    { header: "Rating", accessorKey: "rating" },
  ]
  return (
    <div>
      <TableSearch data={data} columns={movieColumns} />
    </div>
  )
}

export default App