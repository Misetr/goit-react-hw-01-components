import css from './UserCard.module.css'



const UserCard = ({ username, tag, location, avatar,stats }) => {
  const {followers, views, likes} = stats
  return (
    <div className={ css.profile }>
      <div className={ css.description }>
        <img src={avatar} alt={ username }></img>
        <h1 className={ css.profile }>{ username }</h1>
        <a href="/" className={ css.tag }>@{ tag }</a>
        <p className={ css.location }>{ location }</p>
      </div>

      <ul className={ css.stats }> 
        <li>
          <span className={ css.label }>Followers</span>
          <span className={ css.quantity }>{followers}</span>
        </li>
        <li>
          <span className={ css.label }>Views</span>
          <span className={ css.quantity }>{views}</span>
        </li>
        <li>
          <span className={ css.label }>Likes</span>
          <span className={ css.quantity }>{likes}</span>
        </li>
      </ul>
    </div>
  )
}


export default UserCard