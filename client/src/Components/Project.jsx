import React from 'react'

export default function Project() {
  return (
    <a href='/project/id' class="rounded overflow-hidden shadow-lg min-h-[100px] min-w-[150px] w-[23.5%] max-w-[23.5%] bg-center bg-[url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp')] bg-cover">
      {/* <img class="w-full" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" alt="Mountain"/> */}
      <div className="bg-[rgba(0,0,0,0)] transition duration-75 hover:bg-[rgba(0,0,0,.2)] h-full w-full p-1">
        <div className="inline-flex max-w-max bg-rose-200 items-center px-2 py-1 space-x-2 text-xs rounded">
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-rose-500"></span>
          <span className="group-hover:underline text-rose-500 font-normal">Late</span>
        </div>
        <h1 class="font-bold text-xl mt-2 text-white">Project Name</h1>

      </div>
    </a>
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