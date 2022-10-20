import React from 'react'
import data from '../data.js'
import { Icon } from '@iconify/react';


export default function Projects() {
  return (
    <section id='projects' className='transition-all bg-projects-light dark:bg-projects-dark bg-cover text-superDarkGray bg-superLightGray dark:bg-superDarkGray dark:text-white pt-28 pb-16'>

        {/* Section Title */}
        <h1 className='font-bold text-4xl text-center uppercase tracking-widest'>Projects</h1>
        
        {/* Projects */}
        <div className='flex flex-col mt-8 px-12'>
            
          {/* Major Project */}
          {data.majorProjects.map(project => {
            return(
              <article key={project.title} className='mt-10 flex flex-col items-center space-y-8 md:px-20 lg:px-16 md:flex-row md:items-start md:space-y-0 md:space-x-12 '>

                {/* Info Section */}
                <div className='w-full md:w-4/5 lg:w-1/2'>
                  {/* Title */}
                  <a href={project.github} target='_blank' rel='noreferrer' className='transition-all cursor-pointer text-lg font-semibold tracking-widest uppercase hover:underline'>{project.title}</a>

                  {/* Description */}
                  <p className='text-sm text-darkGray dark:text-lightGray'>{project.description}</p>

                  {/* Stack */}
                  <div className='hidden lg:flex space-x-2 mt-2'>
                    {project.stack.map(language => {
                      return <Icon key={language.name} className='transition-all w-5 h-5 hover:text-lightBlue dark:text-lightBlue dark:hover:text-white' icon={language.icon} />
                    })}
                  </div>

                  {/* CTAs */}
                  <div className='hidden lg:flex items-center space-x-2 mt-4'>
                    {/* Live Site */}
                    <a href={project.liveSite} target='_blank' rel='noreferrer' className='transition-all py-0.5 px-3 rounded-lg bg-lightBlue text-white  flex items-center space-x-2 hover:bg-white hover:text-lightBlue dark:bg-white dark:text-lightBlue dark:hover:bg-lightBlue dark:hover:text-white'>
                      <p className='font-bold text-base'>Live Site</p>
                      <Icon className='w-5 h-5' icon="dashicons:admin-site-alt"/>
                    </a>

                    {/* Repository */}
                    <a href={project.repository} target='_blank' rel='noreferrer' className='transition-all p-1 rounded-lg bg-darkGray flex items-center space-x-2 text-white hover:bg-lightBlue hover:text-white dark:hover:bg-white dark:hover:text-lightBlue dark:bg-lightBlue'>
                      <Icon className='w-5 h-5' icon="carbon:logo-github"/>
                    </a>
                  </div>
                </div>
                  
                {/* Preview */}
                <div className='flex flex-col items-center p-4 bg-lightGray dark:bg-veryDarkGray rounded-lg w-full'>

                  {/* Preview Image */}
                  <a href={project.liveSite} target='_blank' rel='noreferrer' className='transition-all cursor-pointer flex flex-col space-y-4 hover:-m-2 '>
                    <img className='cursor-pointer rounded-lg border-1 border-lightGray dark:border-superDarkGray drop-shadow-lg' src={require(`../assets/${project.preview}.PNG`)} alt={project.preview}/>
                  </a>

                  {/* Stack */}
                  <div className='flex lg:hidden space-x-4 mt-2'>
                    {project.stack.map(language => {
                      return <Icon key={language.name} className='transition-all w-5 h-5 hover:text-lightBlue dark:text-lightBlue dark:hover:text-white' icon={language.icon} />
                    })}
                  </div>

                  {/* CTAs */}
                  <div className='flex lg:hidden items-center space-x-2 mt-4'>
                    {/* Live Site */}
                    <a href={project.liveSite} target='_blank' rel='noreferrer' className='transition-all py-0.5 px-3 rounded-lg bg-white flex items-center space-x-2 text-lightBlue hover:bg-lightBlue hover:text-white'>
                      <p className='font-bold text-base'>Live Site</p>
                      <Icon className='w-5 h-5' icon="dashicons:admin-site-alt"/>
                    </a>

                    {/* Repository */}
                    <a href={project.repository} target='_blank' rel='noreferrer' className='transition-all p-1 rounded-lg bg-lightBlue flex items-center space-x-2 text-white hover:bg-white hover:text-lightBlue'>
                      <Icon className='w-5 h-5' icon="carbon:logo-github"/>
                    </a>
                  </div>

                </div>
              </article>
            )
          })}

          {/* Section Subtitle */}
          <h1 className='mt-24 font-bold text-2xl text-center uppercase tracking-widest snap-start'>Smaller Projects</h1>    

          {/* Minor Projects */}
          <div className='flex space-x-4 overflow-x-scroll snap-x snap-mandatory w-full mt-8 lg:px-16 lg:grid lg:grid-cols-2 lg:overflow-hidden lg:space-x-0 lg:gap-8 '>
            {data.minorProjects.map(project => {
              return(
                <article key={project.title} className='my-8 snap-start flex flex-col justify-between items-center space-y-4 p-4 bg-white dark:bg-veryDarkGray rounded-lg text-center lg:h-70 lg:w-full lg:my-0 lg:flex-row lg:space-x-8'>
                  
                  {/* Preview */}
                  <div className='flex flex-col items-center h-52 p-2 bg-veryDarkGray dark:bg-lightGray rounded-lg w-60 lg:h-full lg:p-1 lg:space-x-4 lg:w-3/5'>
                    {/* Preview Image */}
                    <a href={project.liveSite} target='_blank' rel='noreferrer' className='cursor-pointer flex justify-center items-center space-y-4'>
                      <img className='cursor-pointer rounded-lg border-1 h-48 object-cover center border-veryVeryLightGray dark:border-superDarkGray drop-shadow-lg transition-all lg:scale-95 hover:scale-100' src={require(`../assets/${project.preview}.PNG`)} alt={project.preview}/>
                    </a>
                  </div>
                  
                  {/* Info Section */}
                  <div className='h-48 w-full flex flex-col items-center justify-start lg:justify-start lg:items-start lg:h-full lg:w-2/5'>

                    {/* Title */}
                    <a className='lg:text-left text-sm font-medium tracking-widest uppercase' href={project.repository} target='_blank' rel='noreferrer'>{project.title}</a>
                    
                    {/* Course Project */}
                    {project.courseProject && <p className='lg:text-left text-xs text-lightBlue underline' href={project.repository} target='_blank' rel='noreferrer'>Course Project</p>}

                    {/* Description */}
                    <p className='lg:text-left text-xs dark:text-lightGray'>{project.description}</p>

                    {/* Stack */}
                    <div className='flex lg:flex space-x-2 mt-2'>
                      {project.stack.map(language => {
                        return <Icon key={language.name} className='transition-all w-5 h-5 text-darkGray hover:text-lightBlue dark:text-lightBlue dark:hover:text-white' icon={language.icon} />
                      })}
                    </div>

                    {/* CTAs */}
                    <div className='flex lg:flex items-center space-x-2 mt-4'>
                      {/* Live Site */}
                      <a href={project.liveSite} target='_blank' rel='noreferrer' className='transition-all p-1 rounded-lg bg-lightBlue dark:bg-white flex items-center justify-center text-white dark:text-lightBlue hover:bg-darkGray dark:hover:bg-lightBlue hover:text-white'>
                        <Icon className='w-6 h-6' icon="dashicons:admin-site-alt"/>
                      </a>

                      {/* Repository */}
                      <a href={project.repository} target='_blank' rel='noreferrer' className='transition-all p-1 rounded-lg bg-darkGray dark:bg-lightBlue flex items-center text-white hover:bg-lightBlue hover:text-white dark:hover:bg-white dark:hover:text-lightBlue'>
                        <Icon className='w-6 h-6' icon="carbon:logo-github"/>
                      </a>
                  </div>

                </div>
                </article>
              )
            })}
          </div>
          
          {/* CTA */}
          <a className='mt-20 self-center transition-all text-white py-1 px-4 font-bold rounded-full bg-veryDarkGray hover:bg-lightBlue  dark:bg-lightBlue dark:hover:text-lightBlue dark:hover:bg-white' href={data.websites.github} target='_blank' rel='noreferrer'>View Repositories</a>
        
        </div>


    </section>
  )
}
