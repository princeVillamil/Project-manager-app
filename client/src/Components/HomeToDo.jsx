import React from 'react'

export default function HomeToDo() {
  return (
		<div class="shadow bg-white p-2 rounded mt-1 border-b flex flex-col border-grey cursor-pointer hover:bg-grey-lighter">
			<a rel="noopener noreferrer" href="#" className="inline-flex max-w-max bg-purple-200 items-center px-2 py-1 my-1 space-x-2 text-sm border rounded group dark:border-gray-700">
				<span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
				<span className="group-hover:underline text-purple-500 font-semibold">Current</span>
			</a>
			Do a mobile first layout
		</div>
  )
}
// CD8DE5 dark EDDBF4 light purp/current
// 7BC86C dark D6ECD2 light green/early
// EF7564 dark F5D3CE light red/late

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