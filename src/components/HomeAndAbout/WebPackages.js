import React from 'react'
import Title from '../Title'
import styled from 'styled-components'
import SingleWebPackage from './SinglePackage'

const WebPackages = ({cls, packages, name}) => {
  return (
    <WebPackagesWrapper className={`${cls}`} id="packages">
        <Title title={name} subtitle="Packages" />
      <div className="div-wrapper" >
          {packages.map((item, index) => {
            const {data} = item
            return <SingleWebPackage key={index} data={data}/>
          })}
        </div>
    </WebPackagesWrapper>
  )
}
const WebPackagesWrapper = styled.section`
  &{
    border-radius: var(--radius);
    margin-top: 4rem;
    padding: 0 0 0 0;
    .div-wrapper{
      display: grid;
      grid-column-gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(360px, 400px));
      justify-content: center;
      margin: 0 auto;
      width: 80%;
    }
  }
  @media(max-width: 400px){
    &{
      *{
        padding: 0 0 0 0;
        margin: auto;
      }
    }
  }
`

export default WebPackages
