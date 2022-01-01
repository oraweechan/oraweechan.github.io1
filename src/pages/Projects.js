import React from 'react'
import SectionTitle from '../components/SectionTitle'
import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'

const ProjectsStyles = styled.div`
// background-color:red;
padding:10rem 0;
`

export default function Projects() {
    return (
        <ProjectsStyles>
            <div>
           <div className="container">
               <SectionTitle heading="Projects" subheading="some of my recent works" />
               <div className='projects__searchbar'>
                   <form>
                       <input type="text"/>
                       <MdSearch />
                   </form>
               </div>
               <div className='projects__allItems'>
             
               </div>
           </div>
            
        </div>

        </ProjectsStyles>
        
    )
}
