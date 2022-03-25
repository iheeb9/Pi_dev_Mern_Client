import React, { useState } from 'react'

const Search = ({history}) => {


	const [keyword,setKeyword]= useState('');

		const searchHandler = (e) => {
			e.preventDefault()
			if(keyword.trim()){
				history.push(`/search/${keyword}`)
			}else{
				history.push('/allproduct')
			}
		}


  return (
    <div class="search-bar-top">
							
    <div class="search-bar">
        
    All category
        <form onSubmit={searchHandler}>
            
            <input name="search" placeholder="Search Products Here....." type="search"
                    onChange={(e)=> setKeyword(e.target.value)}
            />
            <button class="btnn"><i class="ti-search"></i></button>
        </form>
    </div>
</div>
  )
}

export default Search