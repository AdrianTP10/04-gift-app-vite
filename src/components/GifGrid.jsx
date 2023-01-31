import useFetchGifs from '../hooks/useFetchGifs';
import {GiftItem} from './GiftItem'


export function GifGrid({category}) {
  const {images, isLoading} = useFetchGifs(category);
  console.log(isLoading);

  return (
    <>
      <h3 className=' text-2xl font-semibold text-center pb-5 '>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
        
      }
      <div className='flex flex-row flex-wrap gap-3 justify-center mb-10'>
        { images.map( (image) => (
            <GiftItem key={image.id} {...image}/>
          )) 
        }
      </div>
    </>
  )
}
