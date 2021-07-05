import React from 'react'
import PhoneNumber from '../PhoneNumber'

import styled from 'styled-components'



const SingleWebPackage = ({data}) => {
  const detail_list = data.details.split('.').filter((item)=>item.length!==0)
  const note_list = data.note ? data.note.split('.').filter((item)=>item.length!==0): null

  return (
    <SingleWebPackageWrapper data-sal="zoom-in" data-sal-easing="ease">
      <div className="top-half">
      <div className="name">{data.name}</div>
      <span className="price">{data.price}</span>
      <div className="price-info">{data.priceInfo?<>{data.priceInfo}</>:<></>}</div>
      <div className="underline"/>
      {data.detailsInfo &&(<div className="details-info">{data.detailsInfo}</div>)}
      <div className="detail-list-wrapper">
        <ul data-bullet-list className="details">
          {detail_list.map((txt, idx)=><li key={idx}><p>{txt.trim()}</p></li>)}
        </ul>
      </div>
        </div>
        <div className="bottom-half">
      <div className="footer-underline"/>
      <div className="note-list">
        {note_list &&(<>{note_list.map((txt,idx)=><p className="note" key={idx}>{txt.trim()}</p>)}</>)}
      </div>
      <PhoneNumber className="single-web-package-phone-number"/>
        </div>
    </SingleWebPackageWrapper>
  )
}

const SingleWebPackageWrapper = styled.article`
  &{
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-content: space-around;
    align-items:stretch;
    .top-half{width: 100%; display:block;}
    .bottom-half{width: 100%; display:block;}
    border: 1px solid var(--navHoverGrey);
    margin: 1rem 0;
    text-align: center;
    border-radius: var(--radius);
    .name,.price-info,.price{
      align-items: center;
      color: var(--digitalColor);
      display: flex;
      font-size: 1.6rem;
      font-family: sans-serif;
      font-style: normal;
      font-weight: 700;
      justify-content: center;
      min-height: 2rem;
      margin: .5rem auto;
    }
    .price-info{
      font-family: var(--mainFF);
      font-size: .95rem;
      letter-spacing: var(--altSpacing);
    }
    .underline{
      background-color: var(--solutionsColor);
      height: 3px;
      margin: 0 auto;
      width: 50%;
    }
    .footer-underline{
      background-color: var(--navHoverGrey);
      height:1px;
      margin: 0 auto;
      width: 75%;
      opacity:.2;
    }
    .details-info{
      font-family: sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      margin: 1rem auto 0;
      text-align:center;
      text-transform: capitalize;
      width: fit-content;
    }
    .detail-list-wrapper{
      margin: 0 auto;
      padding: 0 1rem 0 3rem;

      ul.details{
        font-family: var(--mainFF);
        font-size: 1rem;
        margin: 0 auto;
        max-width: fit-content;
        text-align: left;
        li{
          text-indent:-5px;
          padding-left:5px;
          letter-spacing:var(--altSpacing);
          margin: 1rem auto;
          line-height: 1.7rem;
          p{
            :first-line{text-indent:0;}
          }
        }
      }
    }
    /* Start This is how to do it */
    .note-list{
      max-width: fit-content;
      margin: 1rem auto;
      padding: 0 1rem 1rem 2rem;
      text-align: left;
      .note{
        margin-bottom: .4rem;
        font-size: .8rem;
        :last-of-type{margin-bottom:0;}
      }
      .note:before{
        content: "*";
        padding-right: .2rem;
        margin-left: -.2rem;
      }
    }
    /* End This is how to do it */
    .single-web-package-phone-number{
      display: block;
      padding: 1rem;
    }
  }
  @media(min-width: 768px){
    &{
      .detail-list-wrapper{
        padding: 0 2rem;
      }
      .note-list{
        text-align: left;
        .note{
          margin-bottom: .4rem;
          font-size: .8rem;
        }
        .note:before{
          padding-right: 1rem;
          margin-left: -1rem;
        }
      }
    }
  }
  @media(max-width: 400px){
    &{
      border-left: none;
      border-right: none;
      .detail-list-wrapper{
        padding-left: 3rem;
        padding-right: 1rem;
        margin-left: 0;
      }
      .note-list{
        padding: 0 1rem 1rem 2rem;
        .note{}
        .note:before{
          display:none;
        }
      }
    }
  }
`
export default SingleWebPackage
