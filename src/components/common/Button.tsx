import * as React from 'react'

type Props = {
  text: string
}

export default ({ text }: Props) => <button type="button">{text}</button>
