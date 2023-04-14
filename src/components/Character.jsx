import { useLoaderData } from 'react-router-dom'
import { getCharacter } from '../loaders/character'

export async function characterLoader() {
  const character = await getCharacter(1)
  return { character }
}

function calcModifier(statValue) {
  const result = Math.floor((statValue - 10) / 2)

  if (result > 0) {
    return '+' + result
  }

  return result
}

function Stat({ value, name }) {
  return (
    <div className='stat'>
      <label>{name}</label>
      <div className='stat-value'>{value}</div>
      <div className='stat-modifier'>{calcModifier(value)}</div>
    </div>
  )
}

function StatList() {
  const { character } = useLoaderData()

  if (!character)
    return (
      <div className='stat-list'>
        <div className='spinner-container'>
          <div className='loading-spinner'></div>
        </div>
      </div>
    )

  return (
    <div className='stat-list'>
      <Stat value={character.int} name='INT' />
      <Stat value={character.cha} name='CHA' />
      <Stat value={character.str} name='STR' />
      <Stat value={character.wis} name='WIS' />
      <Stat value={character.dex} name='DEX' />
      <Stat value={character.con} name='CON' />
    </div>
  )
}

export default function CharacterSheet() {
  return (
    <div className='character-sheet'>
      <StatList />
    </div>
  )
}
