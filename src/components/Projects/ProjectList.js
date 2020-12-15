import React, { Component } from 'react'
import styles from '../../css/projects.module.css'
import Project from './Project'
import Title from '../Title'

export default class ProjectList extends Component {
  state = {
    projects: [],
    sortedProjects: [],
  }

  componentDidMount() {
    this.setState({
      projects: this.props.projects,
      sortedProjects: this.props.projects,
    })
  }

  render() {
    return (
      <section className={styles.projects}>
        <Title title="our" subtitle="projects" />
        <div className={styles.center}>
          {this.state.sortedProjects.map(({ data }) => {
            return <Project key={data.id} project={data} />
          })}
        </div>
      </section>
    )
  }
}
