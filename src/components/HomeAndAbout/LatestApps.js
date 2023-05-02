import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Title from '../Title'

import latestReactApps from '../../constants/latest-apps'

const LatestApps = () => {
  return (
    <LatestAppsWrapper>
      <Title title="Latest" subtitle="Apps" />
      <div className="grid">
        {latestReactApps.map((item, index) => {
          return (
            <article key={index} className="app">
              <Link to={`/${item.slug}/`} key={index}>
                <p className="app_title ">{item.title}</p>

                {item.details.map((txt, txt_idx) => {
                  return (
                    <p className="app_details" key={txt_idx}>
                      {txt.trim()}
                    </p>
                  )
                })}
              </Link>
            </article>
          )
        })}
      </div>
    </LatestAppsWrapper>
  )
}

const LatestAppsWrapper = styled.section`
  & {
    padding: 2rem;

    div.grid {
      align-items: flex-start;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-column-gap: 2rem;
      grid-auto-rows: 1fr;
      margin: auto auto;

      article.app {
        margin: 0 auto;
        text-align: center;
        width: 100%;
        padding: 1rem;

        .app_icon {
          display: inline-block;
          font-size: 2rem;
          color: var(--clr-secondary-color);
          margin-bottom: 1.5rem;
          line-height: 0;
        }
        .app_title {
          border-bottom: 1px solid black;
          font-family: var(--displayFF);
          font-size: 1rem;
          font-weight: var(--displayFFWeight);
          outline: transparent;
          margin: auto auto 1.25rem;
          text-align: center;
          text-transform: capitalize;
          width: fit-content;
        }
        .app_details {
          font-family: var(--mainFF);
          font-weight: 300;
          font-size: 0.95rem;
          text-align: center;
          text-transform: none;
          margin-bottom: unset;
        }
      }
    }
  }
`
export default LatestApps
