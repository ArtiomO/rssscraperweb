import { Link } from 'react-router-dom'
import CharacterSheet from '../components/Character'

export default function AccountPage() {
  return (
    <div>
      <li>
        <Link to={'/createchar'}> Create character </Link>
      </li>
      <CharacterSheet />
    </div>
  )
}
