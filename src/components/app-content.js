import React, {PropTypes} from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ( {userinfo, repos, starred, isFetching, handleSearch, handlerRepos, handlerStarred}) => (
  <div className='app'>
    <Search  handleSearch={handleSearch} isDisabled={isFetching} />

    {isFetching && <div>Carregando..... </div>}
    {!!userinfo && <UserInfo userinfo={userinfo}/> }

    {!!userinfo && <Actions handlerRepos={handlerRepos} handlerStarred={handlerStarred}/> }

    {!!repos.length &&
    <Repos classname='repos'
          title='Repositório'
          repos={repos}
    />}


    { !!starred.length &&
      <Repos classname='starred'
          title='Favoritos'
          repos={starred}
    />}
  </div>
)

AppContent.proptype = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handlerRepos: PropTypes.func.isRequired,
  handlerStarred: PropTypes.func.isRequired
}

export default AppContent
