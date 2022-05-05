
/**
 *   data struct friend list
 *  @typedef  { Object } FriendList 
 *  @property  {string} name friend's name
 *  @property   {number} [age] friend's  age (optional)  
 */

/**
 *   data struct to save a new user
 * @typedef     {Object} User
 * @property    {string} name user's name
 * @property    {number } [age]  user's age (optional)
 * @property    {string} lastName user's last name
 * @property    {Array<FriendList>} friends  users's  friends
 */

/**
 *  @type {User}
 */
const User1 = {
    name:"isaac",
    lastName:"Grimaldo",
    age:30,
    friends:[{name:"pedro", age:20}, {name:"melisa"}]
}