import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import './styles/pokeCard.css'

const PokeCard = ({url}) => {
    const navigate = useNavigate()
    const [pokemon, getPokemon] = useFetch()

    useEffect(() => {
      getPokemon(url)
    
    }, [])
    
    //console.log(pokemon)

    const handleClick = () => {
      navigate(`/pokedex/${pokemon.id}`)
    }
  return (
    <article onClick={handleClick} className='pokeCard'>
      <div className={pokemon?.types[0].type.name}></div>
      <figure>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </figure>
        <h3>{pokemon?.name}</h3>
        <ul className='pokeTypes'>
          {
            pokemon?.types.map(type=> (
              <li key={type.type.url} className={`slot${type.slot}`}>{type.type.name} </li>
            ))
          }
        </ul>
        <p>type</p>
        <hr />
        <ul className='pokeStats'>
          {
            pokemon?.stats.map(stat => (
              <li key={stat.stat.url}>{stat.stat.name} <span>{stat.base_stat}</span></li>
            ))
          }
        </ul>
    </article>
  )
}

export default PokeCard