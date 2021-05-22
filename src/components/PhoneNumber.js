import React from 'react'

const Phone = (props)=>{
  const formatPh = (spacer) =>(`707${spacer}266${spacer}8106`)

  return <a
      href={`tel:${formatPh('-')}`}
      title="Call or Text"
      className={`${props.className ? props.className:''} phone`}>
      {`${formatPh('.')}`}
    </a>
}

export default Phone
