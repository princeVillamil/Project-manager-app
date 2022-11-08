import React from 'react'
import Header from '../Components/Header'
import Project from '../Components/Project'
import HomeToDo from '../Components/HomeToDo'

export default function Home() {
  const placeHolderProjects = [
    {
      projectTitle: "ProjectOne",
      projectID: "1",
      usersInTeam: ['IDone', 'IDtwo', 'IDthree'],
      repoName: 'Teamrepo',
      repoLink: 'https://github.com/princeVillamil/anime-tracker-heroku',
      status: 'Early',
      Deadline: Date.now(),
    },
    {
      projectTitle: "ProjectTwo",
      projectID: "2",
      usersInTeam: ['IDone', 'IDtwo', 'IDthree'],
      repoName: 'Teamrepo',
      repoLink: 'https://github.com/princeVillamil/anime-tracker-heroku',
      status: 'Early',
      Deadline: Date.now(),
    },
    {
      projectTitle: "ProjectThree",
      projectID: "3",
      usersInTeam: ['IDone', 'IDtwo', 'IDthree'],
      repoName: 'Teamrepo',
      repoLink: 'https://github.com/princeVillamil/anime-tracker-heroku',
      status: 'Early',
      Deadline: Date.now(),
    }
  ]

  return (
    <div className="2xl:container 2xl:mx-auto">
      <Header/>
      <div className="mt-5 container flex gap-2 flex-col mx-auto md:flex-row">
        {/* Project Side */}
        <div className='w-3/4 h-fit overflow-hidden overflow-x-auto rounded shadow-lg'>
          <table className="min-w-full divide-y divide-gray-200 font-semibold text-md">
            <thead className="bg-gray-700 font-bold text-lg">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white" >
                    Project
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white" >
                    Team
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white" >
                    Repository
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white" >
                  Status
                </th>
                <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-white" >
                  Deadline
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {
                placeHolderProjects.map(x=>{
                  return <Project key={x.projectID}/>
                })
              }
              
            </tbody>
          </table>
        </div>
        {/* All Task side */}
        <div className='h-fit w-1/4 overflow-hidden overflow-x-auto rounded shadow-lg max-w-xl px-5 pt-0 pb-2 mx-auto dark:bg-gray-800 dark:text-gray-100'>
          <h6 className='bg-gray-700 max-w-fit text-white rounded mb-4 px-7 text-lg font-medium py-1 my-1 space-x-2 shadow'>Task</h6>
          <ul className="space-y-5">
            <HomeToDo/>
            <HomeToDo/>
          </ul>
        </div>
      </div>

    </div>
    
  )
}
