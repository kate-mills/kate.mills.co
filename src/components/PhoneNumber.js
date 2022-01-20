import React from 'react'

const Phone = (props)=>{
  const formatPh = (spacer) =>(`415${spacer}988${spacer}1102`)

  return <a
      href={`tel:${formatPh('-')}`}
      title="Call or Text"
      className={`${props.className ? props.className:''} phone`}>
      {`${formatPh('.')}`}
    </a>
}

export default Phone
