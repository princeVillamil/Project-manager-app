import React from 'react'

export default function HomeToDo() {
  return (
		<li className="flex items-start space-x-3">
			<div className="flex-1 space-y-2">
				<div className="flex items-center justify-between font-semibold text-md space-x-4">
					<a rel="noopener noreferrer" href="#" className="bg-green-500 inline-flex text-white items-center px-3 py-1 my-1 space-x-2 text-sm rounded shadow group">
						<span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white"></span>
						<span className="group-hover:underline">Early</span>
					</a>
					<span className="text-xs whitespace-nowrap">In 11 days</span>
				</div>
				<div>
					<p>Edit email drafts</p>
				</div>
			</div>
		</li>
  )
}
