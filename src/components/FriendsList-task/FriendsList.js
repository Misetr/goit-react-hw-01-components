import css from './FriendsList.module.css'

const Friends = ({ friendsList }) => {
  return <ul className={ css.friendlist }>
    {friendsList.map(({ id, isOnline, avatar, name }) => 
      <li className={css.item} key={id}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{ name }</p>
      </li>
    )}
  </ul>
  
}
//  fix page 
export default Friends