

export function GiftItem({title, url, id}) {
  return (
    

     <div className="rounded-lg overflow-hidden shadow-xl  shrink-0">
      <img className=" w-full transition duration-300 hover:scale-110 " src={url} alt={title}/>
      <h1 className="font-sans font-semibold p-4 place-content-center">{title}</h1>

         
         
        {/* <div className="rounded-lg">
        <img className=" rounded-t-lg shadow-lg " src={url} alt={title}/>
        <h1 className="bg-white font-sans font-semibold p-2 rounded-b-lg shadow-lg">{title}</h1>
      </div> */}
    </div> 
   
   
  )
}
