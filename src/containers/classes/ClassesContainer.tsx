import SearchField from '../../components/fields/SearchField'
import ExploreClasses from './ExploreClasses'
import BrowseAll from './BrowseAll'

const ClassesContainer = () => {
    const handleSearchClasses = ()=>{

    }
    const dummyPopularSubjects = [
      {name: 'Mathematics', id : ' mathematics'},
      {name: 'Chemistry', id: 'chemistry'},
      {name: 'Biology', id: 'biology'},
      {name: 'English', id: 'english'},
      
      ]
  return (
    <div className='w-full flex flex-col items-center gap-10'>
        {/* SEARCH */}
        <section className='w-full flex justify-center'>
          <div className='max-w-[800px] w-full'>
            <SearchField placeholder='Find Classes and Tutorials' handleSubmit={handleSearchClasses} isColored/>
          </div>
        </section>

        {/* EXPLORE */}
        <section className='w-full max-w-[95%] xl:max-w-[85%] '>
            <ExploreClasses popularSubjects={dummyPopularSubjects}/>
        </section>

        {/* BROWSE ALL */}
        <section className='w-full max-w-[95%] xl:max-w-[85%] '>
          <BrowseAll/>
        </section>

        {/* NEW ADDITIONS */}
    </div>
  )
}

export default ClassesContainer