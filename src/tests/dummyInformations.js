function UserDetails(
  fullname = 'John Does',
  email = 'johndoe@email.com',
  password = 'password1'
) {
  return {
    fullname,
    email,
    password,
  };
}

function FoodDetails(
  name = 'Rice and Bean',
  price = '100.00',
  available = true
) {
  return { name, price, available };
}
module.exports = { UserDetails, FoodDetails };
