"use client"

import { SearchManufacturer } from '.'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image src="/magnifying-glass.svg" width={40} height={40} className="object-contain" alt="search button" />
    </button>
)

const SearchBar = ({  setManufacturer , setModel} : any) => {
    const router = useRouter()
    const [searchManufacturer, setSearchManufacturer] = useState('')
    const [searchModel, setSearchModel] = useState('')
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(searchManufacturer === '' && searchModel === '') return
        setModel(searchModel)
        setManufacturer(searchManufacturer)
     }

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer selected={searchManufacturer} setSelected={setManufacturer} />
                <SearchButton otherClasses='sm:hidden' />
            </div>

            <div className="searchbar__item">
                <Image src='/model-icon.png' width={25} height={25} alt="car model" className="absolute w-[20px] h-[20px] ml-4" />
                <input type="text" name="model" value={searchModel} onChange={e => setSearchModel(e.target.value)} placeholder="Car Model" className="searchbar__input" />
                <SearchButton otherClasses='sm:hidden' />
            </div>

            <SearchButton otherClasses='max-sm:hidden' />
        </form>
    )
}

export default SearchBar