import React from 'react'
import Title from '../Title'
import styled from 'styled-components'
import SingleWebPackage from './SinglePackage'

const WebPackages = ({cls, packages, name}) => {
  return (
    <WebPackagesWrapper
      className={`${cls}`} id="packages">
      <Title title={name} subtitle="Packages" className="packages-title"/>
      <div className="packages-wrapper" >
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
    margin: 4rem auto 0;
    padding: 0 0 0 0;
    width: 100vw;
    .packages-title{
      margin: 0 auto;
    }
    .packages-wrapper{
      display: grid;
      grid-column-gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(360px, 400px));
      align-items: stretch;
      justify-content: center;
      margin: 1rem auto;
      width: 100%;
    }
  }
  @media(max-width: 400px){
    &{
      *{
        margin: auto;
        padding: 0 0 0 0;
      }
    }
  }
`

export default WebPackages
