import React from 'react'
import Title from '../Title'
import styled from 'styled-components'

const WebPackages = ({cls, packages, name}) => {
  return (
    <WebPackagesWrapper className={`${cls}`} id="packages">
        <Title title={name} subtitle="Packages" />
        <div className="div-wrapper">
          {packages.map((item, index) => {
            const {data} = item
            const detail_list = data.details.split('.').filter((item)=>item.length!==0)
            const note_list = data.note ? data.note.split('. ').filter((item)=>item.length!==0): null
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
                  </ul>
                </div>
                {note_list &&(<div className="note-list">{
                  note_list.map((item, idx)=>{
                    return <p className="note" key={idx}>{item}</p>
                  })
                }</div>)}
              </article>
            )
          })}
        </div>
    </WebPackagesWrapper>
  )
}
const WebPackagesWrapper = styled.section`
  &{
    background: var(primaryWhite);
    border-radius: var(--radius);
    color: var(--trueBlack);
    margin: 3rem auto;
    padding: 2rem;
    text-align: center;
    .div-wrapper{
      margin: 0 auto;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(auto-fit, minmax(360px, 400px));
      grid-column-gap: 1rem;
      .package-article{
        background: var(--primaryWhite);
        border: 1px solid var(--navHoverGrey);
        margin: 1rem 0;
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
          font-size: .95rem;
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
          padding: 0 3rem;

          ul.details{
            font-family: var(--mainFF);
            font-size: 1rem;
            margin: 0 auto;
            li{
              *:first-child::before{}
              text-align: left;
              text-indent:-5px;
              padding-left:5px;
              letter-spacing:var(--altSpacing);
              margin: 1rem auto;
              width: 100%;
              line-height: 1.7rem;
              p{
                :first-line{
                  text-indent:0;
                }
              }
            }
          }
        }
        /* This is how to do it */
          .note-list{
            max-width: fit-content;
            margin: -1rem auto 0;
            text-align: left;
            padding-bottom: 1rem;
            .note{
              margin-bottom: .4rem;
              font-size: .8rem;
            }
            .note:before{
              content: "*";
              padding-right: .2rem;
              margin-left: -.2rem;
            }
          }
        /* This is how to do it */
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
      .div-wrapper{
        .package-article{
          .flex-details{
            padding: 0 2rem;
          }
          /* This is how to do it */
          .note-list{
            margin: -1rem auto 0;
            text-align: left;
            padding-bottom: 1rem;
            .note{
              margin-bottom: .4rem;
              font-size: .8rem;
            }
            .note:before{
              padding-right: 1rem;
              margin-left: -1rem;
            }
          }
          /* This is how to do it */
        }
      }
    }
  }
  @media(max-width: 400px){
    &{
      .div-wrapper{
        .package-article{
          .flex-details{
            padding-left: 3rem;
          }
          .note-list{
            .note:before{
              display:none;
            }
          }
        }
      }
    }
  }
  @media(max-width: 359px){
    &{
      .div-wrapper{
        .package-article{
          border-color: transparent;
          .flex-details{
          }
          }
        }
      }
    }
  }


`

export default WebPackages
