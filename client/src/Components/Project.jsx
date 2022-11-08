import React from 'react'

export default function Project() {
  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        ProjectOne
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
      <div className="flex flex-col justify-center">
        <div className="flex -space-x-4">
          <img alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 border-white" src="https://images.unsplash.com/photo-1606825004533-dbfb13be4cb5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXQ_NHx8fHx8fDE2Njc4MDMyNjY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=40" />
          <img alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 border-white" src="https://images.unsplash.com/photo-1606825004533-dbfb13be4cb5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXQ_NHx8fHx8fDE2Njc4MDMyNjY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=40" />
          <img alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 border-white" src="https://images.unsplash.com/photo-1606825004533-dbfb13be4cb5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXQ_NHx8fHx8fDE2Njc4MDMyNjY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=40" />
          <img alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 border-white" src="https://images.unsplash.com/photo-1606825004533-dbfb13be4cb5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXQ_NHx8fHx8fDE2Njc4MDMyNjY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=40" />
          <span className="flex items-center justify-center w-12 h-12 font-semibold rounded-full bg-white dark:bg-gray-900 text-indigo-600 border border-indigo-600">+3</span>
        </div>
      </div>
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        <a className="hover:text-indigo-600" target="_blank" href="https://github.com/princeVillamil/anime-tracker-heroku">TeamRepo</a>
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        <strong className="rounded bg-green-500 px-3 py-1.5 text-xs text-white" >
          Early
        </strong>
      </td>
      <td className="whitespace-nowrap px-4 py-2">
        <div className="flex flex-col text-gray-700">
          <span>30th September 2022</span>
          <span>In 11 days</span>
        </div>
      </td>
    </tr>
  )
}



{/* <tr> */}
{/* <td className="sticky inset-y-0 left-0 bg-white px-4 py-2">
  <label className="sr-only" for="Row1">Row 1</label>
  <input className="h-5 w-5 rounded border-gray-200" type="checkbox" id="Row1" />
</td>
<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
  #00001
</td>
<td className="whitespace-nowrap px-4 py-2 text-gray-700">
  John Frusciante
</td>
<td className="whitespace-nowrap px-4 py-2 text-gray-700">john@rhcp.com</td>
<td className="whitespace-nowrap px-4 py-2 text-gray-700">$783.23</td>
<td className="whitespace-nowrap px-4 py-2">
  <strong className="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700" >
    Cancelled
  </strong>
</td>
</tr>
<tr>
<td className="sticky inset-y-0 left-0 bg-white px-4 py-2">
  <label className="sr-only" for="Row2">Row 2</label>
  <input className="h-5 w-5 rounded border-gray-200" type="checkbox" id="Row2" />
</td>
<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
  #00002
</td>
<td className="whitespace-nowrap px-4 py-2 text-gray-700">
  George Harrison
</td>
<td className="whitespace-nowrap px-4 py-2 text-gray-700">
  george@beatles.com
</td>
<td className="whitespace-nowrap px-4 py-2 text-gray-700">$128.99</td>
<td className="whitespace-nowrap px-4 py-2">
  <strong className="rounded bg-green-100 px-3 py-1.5 text-xs font-medium text-green-700" >
    Paid
  </strong>
</td>
</tr>

<tr>
<td className="sticky inset-y-0 left-0 bg-white px-4 py-2">
  <label className="sr-only" for="Row3">Row 3</label>
  <input className="h-5 w-5 rounded border-gray-200" type="checkbox" id="Row3" />
</td>
<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
  #00003
</td>
<td className="whitespace-nowrap px-4 py-2 text-gray-700">Dave Gilmour</td>
<td className="whitespace-nowrap px-4 py-2 text-gray-700">
  dave@pinkfloyd.com
</td>
<td className="whitespace-nowrap px-4 py-2 text-gray-700">$459.43</td>
<td className="whitespace-nowrap px-4 py-2">
  <strong className="rounded bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-700" >
    Partially Refunded
  </strong>
</td>
</tr> */}