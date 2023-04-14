import { Form, redirect } from 'react-router-dom'
import { createCharacter } from '../loaders/character'

function charFactory(formData) {
  const char = {
    int: Number(formData.get('int')),
    str: Number(formData.get('str')),
    dex: Number(formData.get('dex')),
    con: Number(formData.get('con')),
    wis: Number(formData.get('wis')),
    cha: Number(formData.get('cha'))
  }
  return char
}

export async function action({ request, params }) {
  const formData = await request.formData()
  const char = charFactory(formData)
  await createCharacter(char)
  return redirect(`/account`)
}

export default function CharacterForm() {
  return (
    <Form method='post' id='contact-form'>
      <p>
        <span>Name</span>
        <input placeholder='int' aria-label='Intellect' type='number' name='int' />
        <input placeholder='cha' aria-label='Charisma' type='number' name='cha' />
        <input placeholder='str' aria-label='Strenght' type='number' name='str' />
        <input placeholder='wis' aria-label='Wisdom' type='number' name='wis' />
        <input placeholder='dex' aria-label='Dexterity' type='number' name='dex' />
        <input placeholder='con' aria-label='Constitution' type='number' name='con' />
      </p>
      <p>
        <button type='submit'>Save</button>
      </p>
    </Form>
  )
}
