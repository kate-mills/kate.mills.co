import React from 'react'
import Title from '../Title'
import styled from 'styled-components'

const WebPackages = ({cls, packages, name, serviceNotes}) => {
  return (
    <WebPackagesWrapper className={`${cls}`} id="packages">
        <Title title={name} subtitle="Packages" />
        <div className="service-notes polka-dots">{serviceNotes}</div>
        <div className="div-wrapper">
          {packages.map((item, index) => {
            const {data} = item
            const detail_list = data.details.split('.').filter((item)=>item.length!==0)
            return (
              <article key={index} className="package-article">
                <div className="name">{data.name}</div>
                <span className="price">{data.price}</span>
                <div className="price-info">{data.priceInfo?<>{data.priceInfo}</>:<></>}</div>
                <div className="underline"/>
                {data.detailsInfo &&(<div className="details-info">{data.detailsInfo}</div>)}
                <div className="flex-details">
                  <ul data-bullet-list className="details">
                    {detail_list.map((item, idx)=><li key={idx}><p>{item}</p></li>)}
                    {data.note &&(<p className="note">{data.note}</p>)}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
    </WebPackagesWrapper>
  )
}
const WebPackagesWrapper = styled.section`
  &{
    border-radius: var(--radius);
    color: var(--trueBlack);
    margin: 3rem auto;
    padding: 2rem;
    text-align: center;
    .div-wrapper{
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(295px, 1fr));
      grid-column-gap: 2rem;
      .package-article{
        background: var(--primaryWhite);
        border: 1px solid var(--navHoverGrey);
        margin: 1rem 0;
        padding: 0;
        text-align: center;
        border-radius: var(--radius);
        .name,.price-info,.price{
          min-height: 2rem;
          align-items: center;
          border-radius: 10px;
          color: var(--digitalColor);
          display: flex;
          font-size: 1.6rem;
          font-family: sans-serif;
          font-style: normal;
          font-weight: 700;
          justify-content: center;
          margin: .5rem auto;
        }
        .name{
          color:var(--digitalColor);
          font-size: 1.5rem;
        }
        .price-info{
          color:var(--digitalColor);
          font-size: 1rem;
          letter-spacing: var(--altSpacing);
          font-family: var(--mainFF);
        }
        .underline{
          height: 3px;
          background-color: var(--solutionsColor);
          width: 50%;
          margin: 0 auto;
        }
        .details-info{
          width: fit-content;
          margin: 1rem auto 0;
          text-transform: capitalize;
          font-size: 1rem;
          font-family: sans-serif;
          font-style: normal;
          font-weight: 700;
        }
        .flex-details{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          margin: 0 auto;
          ul.details{
            font-family: var(--mainFF);
            font-size: .9rem;
            letter-spacing: var(--altSpacing);
            margin: 0 auto;
            padding-left: 1rem;/*dont remove*/
            width: fit-content;
            li{
              text-align: left;
              text-indent:-5px;
              padding-left:5px;
              margin: 0 auto;
              :first-line{text-indent:0;}
            }
            .note{
              font-style: italic;
              font-weight: 100;
              text-align: left;
            }
          }
        }
      }
    }
    .service-notes{
      background: var(--primaryWhite);
      width: 100%;
      max-width: fit-content;
      margin: 0 auto;
      text-align: left;
      font-size: .9rem;
      text-indent: -15px;
      padding-left: 15px;
      :first-line{text-indent:0;}
    }
  }
  @media(min-width: 768px){
    &{
      .service-notes{
        width: 70%;
      }
    }
  }
`

export default WebPackages
