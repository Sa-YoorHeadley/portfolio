import React from 'react'
import data from '../data.js'
import Tile from './Tile.js'

export default function Skills() {
  return (
    <section id='skills' className='transition-all bg-skills-light dark:bg-skills-dark bg-cover bg-veryLightGray text-veryDarkGray dark:bg-veryDarkGray dark:text-white pt-28 pb-16 flex flex-col items-center'>

        {/* Section Title */}
        <h1 className='font-bold text-4xl text-center uppercase tracking-widest'>Skills</h1>
        
        {/* Skills */}
        <div className='flex flex-col items-center mt-6 md:flex-row md:justify-start md:space-x-16 md:items-start'>
            
            {/* Programming Languages / Frameworks / Libraries */}
            <article className='flex flex-col items-center justify-baseline mt-6 w-72 text-center'>
                {/* Title */}
                <h2 className='text-lg font-semibold h-16 text-superDarkGray dark:text-veryLightGray'>Programming Languages / Frameworks / Libraries</h2>
                {/* Frontend */}

                <h3 className='font-medium text-sm underline mt-3'>Frontend</h3>
                {/* Tiles */}
                <div className='grid grid-cols-4 gap-2 my-4'>
                    {
                        data.programmingLanguagesFrameworks.frontend.map(item => {
                            return <Tile key={item.name} name={item.name} icon={item.icon} width={16} height={20} />
                        })
                    }
                </div>

                {/* Backend */}
                <h3 className='font-medium text-sm underline mt-3'>Backend</h3>
                {/* Tiles */}
                <div className='grid grid-cols-2 gap-2 my-4'>
                    {
                        data.programmingLanguagesFrameworks.backend.map(item => {
                            return <Tile key={item.name} name={item.name} icon={item.icon} width={16} height={20} />
                        })
                    }
                </div>

                {/* Database */}
                <h3 className='font-medium text-sm underline mt-3'>Database</h3>
                {/* Tiles */}
                <div className='grid grid-cols-2 gap-2 my-4'>
                    {
                        data.programmingLanguagesFrameworks.database.map(item => {
                            return <Tile key={item.name} name={item.name} icon={item.icon} width={16} height={20} />
                        })
                    }
                </div>

                {/* Other */}
                <h3 className='font-medium text-sm underline mt-3'>Other</h3>
                {/* Tiles */}
                <div className='grid grid-cols-4 gap-2 my-4'>
                    {
                        data.programmingLanguagesFrameworks.other.map(item => {
                            return <Tile key={item.name} name={item.name} icon={item.icon} width={16} height={20} />
                        })
                    }
                </div>
            </article>


            {/* Tools and Other Skills */}
            <article className='flex flex-col items-center mt-6 w-72 text-center'>
                {/* Title */}
                <h2 className='text-lg font-semibold md:h-16 text-superDarkGray dark:text-veryLightGray'>Tools and Other Skills</h2>

                {/* Development / Design */}
                <h3 className='font-medium text-sm underline mt-4'>Development / Design Tools</h3>
                {/* Tiles */}
                <div className='grid grid-cols-4 gap-y-2 my-4'>
                    {
                        data.toolsAndOtherSkills.developmentAndDesignTools.map(item => {
                            return <Tile key={item.name} name={item.name} icon={item.icon} width={16} height={20} />
                        })
                    }
                </div>

                {/* Programming Skills */}
                <h3 className='font-medium text-sm underline mt-3'>Programming Skills</h3>
                {/* Tiles */}
                <div className='grid grid-cols-3 my-4'>
                    {
                        data.toolsAndOtherSkills.programmingSkills.map(item => {
                            return <Tile key={item.name} name={item.name} icon={item.icon} width={16} height={20} />
                        })
                    }
                </div>

                {/* IT Skills */}
                <h3 className='font-medium text-sm underline mt-3'>IT Skills</h3>
                {/* Tiles */}
                <div className='grid grid-cols-2 gap-x-8 my-4'>
                    {
                        data.toolsAndOtherSkills.itSkills.map(item => {
                            return <Tile key={item.name} name={item.name} icon={item.icon} width={12} height={20} />
                        })
                    }
                </div>
            </article>
        </div>

        {/* CTA */}
        <a className='transition-all mt-20 text-lightBlue py-1 px-4 font-bold rounded-full bg-white hover:text-white hover:bg-lightBlue' href={data.websites.resume} target='_blank' rel='noreferrer'>View Resume</a>
        
    </section>
  )
}
