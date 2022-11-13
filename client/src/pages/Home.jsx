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
        <div className='w-3/4 h-fit overflow-hidden overflow-x-auto rounded px-5'>
          <h3 class="text-lg font-semibold py-1">YOUR PROJECTS</h3>
          <div class="flex flex-wrap gap-2 mt-2">
            <Project/>
            <a href='#' class="rounded overflow-hidden shadow-lg min-h-[100px] min-w-[150px] w-[23.5%] max-w-[23.5%] bg-center bg-[url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp')] bg-cover">
              {/* <img class="w-full" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" alt="Mountain"/> */}
              <div className="bg-[rgba(0,0,0,0)] transition duration-75 hover:bg-[rgba(0,0,0,.2)] h-full w-full p-1">
                <div className="inline-flex max-w-max bg-green-200 items-center px-2 py-1 space-x-2 text-xs rounded">
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-green-500"></span>
                  <span className="group-hover:underline text-green-500 font-normal">Early</span>
                </div>
                <h1 class="font-bold text-xl mt-2 text-white">Super long</h1>
              </div>
            </a>
            <a href='#' class="rounded overflow-hidden shadow-lg min-h-[100px] min-w-[150px] w-[23.5%] max-w-[23.5%] bg-center bg-[url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp')] bg-cover">
              {/* <img class="w-full" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" alt="Mountain"/> */}
              <div className="bg-[rgba(0,0,0,0)] transition duration-75 hover:bg-[rgba(0,0,0,.2)] h-full w-full p-1">
                <div className="inline-flex max-w-max bg-purple-200 items-center px-2 py-1 space-x-2 text-xs rounded">
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-purple-500"></span>
                  <span className="group-hover:underline text-purple-500 font-normal">On time</span>
                </div>
                <h1 class="font-bold text-xl mt-2 text-white">Project Name</h1>
              </div>
            </a>
            <Project/>
          </div>
        </div>
        {/* All Task side */}
        <div className='h-fit w-1/4 overflow-hidden overflow-x-auto rounded shadow-lg max-w-xl px-5 pt-0 pb-2 mx-auto dark:bg-gray-800 dark:text-gray-100'>
          <div class="flex justify-between py-1">
              <h3 class="text-lg font-semibold">Task</h3>
              <svg class="h-4 fill-current text-green-600 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"/></svg>
          </div>
          <div class="text-sm mt-2">
              <HomeToDo/>
              <div class="shadow bg-white p-2 rounded mt-1 border-b flex flex-col border-grey hover:bg-grey-lighter">
                <a rel="noopener noreferrer" href="#" className="inline-flex max-w-max bg-rose-200 items-center px-2 py-1 my-1 space-x-2 text-sm border rounded group dark:border-gray-700">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-rose-500"></span>
                  <span className="group-hover:underline text-rose-500 font-semibold">Late</span>
                </a>
                Do a mobile first layout
              </div>
              <div class="shadow bg-white p-2 rounded mt-1 border-b flex flex-col border-grey hover:bg-grey-lighter">
                <a rel="noopener noreferrer" href="#" className="inline-flex max-w-max bg-green-200 items-center px-2 py-1 my-1 space-x-2 text-sm border rounded group dark:border-gray-700">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  <span className="group-hover:underline text-green-500 font-semibold">Early</span>
                </a>
                Do a mobile first layout
              </div>
              {/* <div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                  Do a mobile first layout
              </div>
              
              <div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                  Check the meta tags
              </div>
              
              <div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
                  Check the responsive layout on all devices
                  <div class="text-grey-darker mt-2 ml-2 flex justify-between items-start">
                      <span class="text-xs flex items-center">
                          <svg class="h-4 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z"/></svg>
                          3/5
                      </span>
                      <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full" />
                  </div>
              </div> */}
              {/* <p class="mt-3 text-grey-dark">Add a card...</p> */}
          </div>
        </div>
      </div>

    </div>
    
  )
}
