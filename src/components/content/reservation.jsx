import { useRef, useState } from 'react'

export default function Reservation() {
    const [data, setData] = useState ({
       email: '',
       name:'',
       phone:'',
       date:'',
       time:'',
       perso:'',
       commande:''
    })
    const inputRef = useRef(data)
    // console.log(inputRef)
    const [error, setErro] = useState({})
  
    function handlechhage(e) {
       setData({
            ...data,
            [e.target.name] : e.target.value
       })
    }

    const Onblu=(e) =>{
        console.log(`Le champ ${e.target.name} a la valeur : ${e.target.value}`)
  
    }
    function Validator () {
       let err= {}

       if (data.email === '') {
        err.email = 'Le champs Obligatioire'
       }

       if (data.name === '') {
        err.name = 'Le champs Obligatioire'
       }

       if (data.phone === '') {
        err.phone = 'Le champs Obligatioire'
       }


       if (data.perso === '') {
        err.perso = 'Le champs Obligatioire'
       }


       if (data.date === '') {
        err.date = 'Le champs Obligatioire'
       }


       if (data.time === '') {
        err.time = 'Le champs Obligatioire'
       }


       if (data.commande === '') {
        err.commande = 'Le champs Obligatioire'
       }

       setErro(err)
       return Object.keys(err).length === 0
    }

    function Submite(e) {
        e.preventDefault()
        const validation = Validator()
        if(validation) {
          const inout=inputRef.current
          inout.focus()
          
              console.log(data)   
        }
    }
  return (
    <div>
      <div className="py-12">
        <div className="px-24">
            <div className="grid  md:grid-cols-2">
                <div className="">
                    <form onSubmit={Submite} className='space-y-3'>
                        <div className="flex items-center  gap-x-4 ">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className='font-bold'>Date</label>
                                <input ref={inputRef} type="text" name="date" value={data.date} onChange={handlechhage} onBlur={Onblu} id="" placeholder='Date de Reservation' className='px-2 p-2 border border-gray-400 rounded-2xl' />
                            </div>
                            <div className="flex flex-col gap-2  ">
                                <label htmlFor="" className='font-bold'>Time</label>
                                <input ref={inputRef} type="text" name="time" value={data.time} onChange={handlechhage} onBlur={Onblu} id="" placeholder="Ajouter l'heure" className='px-2 p-2 border border-gray-400 rounded-2xl' />
                            </div>
                        </div>

                        <div className="flex items-center  gap-x-4 ">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className='font-bold'>Name</label>
                                <input  ref={inputRef} type="text" name="name" id="" value={data.name} onChange={handlechhage} onBlur={Onblu}  placeholder='Votre Nom et Prenom' className='px-2 p-2 border border-gray-400 rounded-2xl' />
                            </div>
                            <div className="flex flex-col gap-2  ">
                                <label htmlFor="" className='font-bold'>Email</label>
                                <input type="text" name="email" id=""  onBlur={Onblu} value={data.email} onChange={handlechhage} placeholder='Votre  Email' className='px-2 p-2 border border-gray-400 rounded-2xl' />
                            </div>
                        </div>
                        <div className="flex items-center  gap-x-4 ">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className='font-bold'>Person</label>
                                <input ref={inputRef} type="text" name="perso" id=""  placeholder='Nombre de Personne' className='px-2 p-2 border border-gray-400 rounded-2xl' />
                            </div>
                            <div className="flex flex-col gap-2  ">
                                <label htmlFor="" className='font-bold'>Phone</label>
                                <input ref={inputRef} type="text" name="phone" id="" value={data.phone} onChange={handlechhage} onBlur={Onblu} placeholder='Numéro de telephone' className='px-2 p-2 border border-gray-400 rounded-2xl' />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            
                            <label htmlFor="" className='font-bold'>Commande</label>
                            <textarea name="" ref={inputRef} id="" placeholder='Commande' onChange={handlechhage} onBlur={Onblu}  className='px-2 p-2 border border-gray-400 rounded-2xl md:w-[31rem]'></textarea>

                            
                        </div>

                        <div className="">
                            <button disabled className='bg-[#f83d8e] p-2 px-4 text-white font-bold rounded-md shadow hover:shadow-md'>Comfirmer Reservation</button>
                        </div>
                    </form>
                </div>
                <div className=""></div>
            </div>
        </div>
      </div>
    </div>
  )
}
